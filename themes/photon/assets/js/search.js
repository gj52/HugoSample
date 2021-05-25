// JSON based simple full text search with vanilla javascript via XMLHttpRequest,
// (c) 2020 by Tanja Becker - Webdeveleopment, http://tanjabecker.de/


// pass query string by CGI parameter: [URL]?query=[search string]
var query = new URLSearchParams(window.location.search).get("query");
if ((query != '') && (query != null)) {
  document.getElementById("custom-search-field").value = query;
}

// Debug mode: shows number of hits in the search result. [URL]?debug=1
let debug = new URLSearchParams(window.location.search).get("debug");

let merge_data = [];

window.addEventListener('load', function() {
  document.getElementById("custom-search").querySelectorAll("input").forEach(item => {
    item.disabled = 'disabled';
  });
  if (!merge_data.length) {
  	document.getElementById("custom-search-results").innerHTML = params['json_wait'];

    if (params['json_src'] != '') {
      var json_src_str = params['json_src'].replace("/\s/g", "");
      var json_sources = json_src_str.split(",");

      var src_count = 0;
	  for (var i = 0; i < json_sources.length; i++) {
        var xmlhttp = new XMLHttpRequest();
        var url = json_sources[i];
        xmlhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.responseText);
			for (var i = 0; i < data.length; i++) {
              merge_data.push(data[i]);
            }
            src_count++;

		    if (src_count == json_sources.length) {
	          document.getElementById("custom-search").querySelectorAll("input").forEach(item => {
                item.disabled = '';
              });

		      document.getElementById("custom-search-field").focus();
		      document.getElementById("custom-search-results").innerHTML = params['json_ready'];

              if ((query != '') && (query != null)) {
                customSearchResults();
              }
	        }
          } 
		  if (this.status == 404) {
            document.getElementById("custom-search-results").innerHTML = params['err_filefailed'];
	      }
        };
        xmlhttp.open("GET", url, true);
        xmlhttp.send();
	  }
    }
  }
}, false); 

document.getElementById("custom-search-field").addEventListener('keyup', function(e) {
  if (params['autocomplete'] == 1) {
    document.getElementById("custom-search-results").innerHTML = '';
    if (this.value == '') {
      document.getElementById("custom-search-results").innerHTML = params['err_nostring'];
      return false;
    } else if (this.value.length < params['minlength']) {
      document.getElementById("custom-search-results").innerHTML = params['err_badstring'];
      return false;
    } else if (this.value.length >= params['minlength']) {
      customSearchResults();
    }
  } else {
    if (this.value == '') {
      document.getElementById("custom-search-results").innerHTML = params['err_nostring'];
	}
  }
});

let sForm = document.getElementById("custom-search");

if (params['defaultsearch'] != '') {
  sForm.querySelectorAll("input[name='option']").forEach(item => {
    item.addEventListener('click', event => {
      customSearchResults();
    });
  });
}

let sSection = '';
if ((params['section_search'] == 1) && (sForm.elements["section[]"])) {
  sSection = sForm.elements["section[]"];
  sForm.querySelectorAll("input[name='section[]']").forEach(item => {
    item.addEventListener('click', event => {
      if (item.value == 'site') {
        if (item.checked) {
          sForm.querySelectorAll("input[name='section[]']").forEach(node => {
            node.checked = false;
          });
          sForm.querySelector("input[value='site']").checked = true;
          customSearchResults();
        }
      } else {
        if (item.checked) {
          sForm.querySelector("input[value='site']").checked = false;
        } else {
          var section_checked = [];
          for (var i = 0; i < sSection.length; i++) {
            if ((sSection[i].checked) && (sSection[i].value != 'site')) {
              section_checked.push(sSection[i].value);
            } else {
              continue;
            }
          }
          if (section_checked.length < 1) sForm.querySelector("input[value='site']").checked = true;
        }
      }
      if (document.getElementById("custom-search-field").value != '') {
        customSearchResults();
      }
    });
  });
}

function customSearchResults() {
  if (!merge_data.length) {
    return false;
  }
  var sOutput = document.getElementById("custom-search-results");
  var sString = document.getElementById("custom-search-field").value;
  if (sString == '') {
    sOutput.innerHTML = params['err_nostring'];
    return false;
  }
  if (sString.length < params['minlength']) {
    sOutput.innerHTML = params['err_badstring'];
    return false;
  }

  var data = merge_data;

  var add_searchlink = params['add_searchlink'];
  if ((add_searchlink) && (add_searchlink != '')) {
    add_searchlink = add_searchlink.replace(/\[QUERY\]/g, sString);
  }

  var sOption = '';
  var optionField = document.forms["custom-search"]["option"];
  if (optionField) {
    sOption = optionField.value;
  } else {
    sOption = params['defaultsearch'];
  } 

  var badwords = [];
  if (params['badwords'] != '') {
    var badwords_str = params['badwords'];
    badwords_str = badwords_str.replace("/\s/g", "");
    badwords = badwords_str.split(",");
  }

  var words = [];
  var search_words = sString.split(" ");
  for (var i = 0; i < search_words.length; i++) {
    if (badwords.includes(search_words[i])) {
      continue;
    } else {
      words.push(search_words[i]);
    }
  }
  if (!words.length) {
    sOutput.innerHTML = params['err_badstring'];
    return false;
  }

  var section_filter = [];
  if (sSection != '') {
    for (var i = 0; i < sSection.length; i++) {
      if ((sSection[i].checked) && (sSection[i].value != 'site')) {
        section_filter.push(sSection[i].value);
      } else {
        continue;
      }
    }
  }

  var results = [];
  for (var i = 0; i < data.length; i++) {
    var title   = data[i].title;
    var summary = data[i].summary;
    var content = data[i].content;
    var tags    = data[i].tags;
    var section = data[i].section;

    if (section_filter.length >= 1) {
      if (!section_filter.includes(section))  {
        continue;
      }
    }

    var searchtext = '';
    if (title != '')   searchtext += title;
    if (summary != '') searchtext += ' '+summary;
    if (content != '') searchtext += ' '+content;
    if (tags != '')    searchtext += ' '+tags;

    var matched = 0;
    var matches = 0;
    var matches_calc = 0;
    var title_matches = 0;
    var tags_matches = 0;
    var summary_matches = 0;
    var content_matches = 0;
    for (var y = 0; y < words.length; y++) {
      var searchword = new RegExp(words[y], 'gi');
      if (searchword.test(searchtext) === true) {
        var wordmatches = searchtext.match(searchword);
        matches = matches + wordmatches.length;
        matches_calc = matches;

        for (var key in searchfield_weight) {
          var val = searchfield_weight[key];
          var searchstr = '';
          var count = '';
          if (key == 'title') searchstr = title;
          if ((key == 'tags') && (tags != '')) searchstr = tags.join(",");
          if (key == 'summary') searchstr = summary;
          if (key == 'content') searchstr = content; 
           
          if (searchword.test(searchstr) === true) {
            matches_calc = matches_calc + val;
            count = searchstr.match(searchword).length;
            if (key == 'title') title_matches = title_matches + count;
            if ((key == 'tags') && (tags != '')) tags_matches = tags_matches + count;
            if (key == 'summary') summary_matches = summary_matches + count;
            if (key == 'content') content_matches = content_matches + count; 
          }           
        }
        matched++;
      }
    }
    data[i]['matches_calc'] = matches_calc;
    if ((debug != '') && (debug != null)) {
      data[i]['matches'] = matches;
      data[i]['title_matches'] = title_matches;
      data[i]['tags_matches'] = tags_matches;
      data[i]['summary_matches'] = summary_matches;
      data[i]['content_matches'] = content_matches;
    }
    if (sOption == 'OR') {
      if (matched >= 1) {
        results.push(data[i]);
      }
    } else {
      if (matched == words.length) {
        results.push(data[i]);
      }
    }
  } 

  // results
  if (results.length >= 1) {
    results.sort(function(a, b) {
      if (params['sort_date'] == 'DESC') {
        return b.matches_calc - a.matches_calc || b.date - a.date;
      } else {
        return b.matches_calc - a.matches_calc || a.date - b.date;
      }
    }); 

    var results_header = '';
    if (results.length > 1) {
      results_header = params['res_more_items'];
    } else {
      results_header = params['res_one_item'];
    } 
    results_header = results_header.replace("[CNT]", results.length);
    if ((add_searchlink) && (add_searchlink != '')) {
      results_header += add_searchlink;
    }

    var tag_top = params['res_out_top'];
    var tag_bottom = params['res_out_bottom'];

    var results_content = '';
    for (var i = 0; i < results.length; i++) {
      var title   = results[i].title;
      var summary = results[i].summary;
      var date    = results[i].date;
      var url     = results[i].url;
      var tags    = results[i].tags;
      var section = results[i].section;
      var extern  = results[i].extern;

      // only for debug mode
      var infos = '';
      if ((debug != '') && (debug != null)) {
        var matches         = results[i].matches;
        var matches_calc    = results[i].matches_calc;
        var title_matches   = results[i].title_matches;
        var tags_matches    = results[i].tags_matches;
        var summary_matches = results[i].summary_matches;
        var content_matches = results[i].content_matches;

        var plus_title   = title_matches >=1   ? '+ '+searchfield_weight['title']   : '+ 0';
        var plus_tags    = tags_matches >=1    ? '+ '+searchfield_weight['tags']    : '+ 0';
        var plus_summary = summary_matches >=1 ? '+ '+searchfield_weight['summary'] : '+ 0';
        var plus_content = content_matches >=1 ? '+ '+searchfield_weight['content'] : '+ 0';

        infos += '<table style="font-size: 12px; color: #666666;">';
        infos += '<tr><td style="width: 100px;"><b>Gesamt:</b></td><td style="text-align: right;">'+matches+'</td></tr>';
        infos += '<tr><td>Title ('+title_matches+'):</td><td style="text-align: right;">'+plus_title+'</td></tr>';
        infos += '<tr><td>Tags ('+tags_matches+'):</td><td style="text-align: right;">'+plus_tags+'</td></tr>';
        infos += '<tr><td>Summary ('+summary_matches+'):</td><td style="text-align: right;">'+plus_summary+'</td></tr>';
        infos += '<tr><td>Content ('+content_matches+'):</td><td style="text-align: right;">'+plus_content+'</td></tr>';
        infos += '<tr><td><b>Gesamt neu:</b></td><td style="text-align: right;">'+matches_calc+'</td></tr>';
        infos += '</table><br>';
      }

      if ((extern == 1) && (params['extern_icon'])) {
        title += ' '+params['extern_icon'];
        url = url + '" target="_blank"';
      }

      if (section != '') {
        if (section_trans[section] != undefined) {
          section = section_trans[section];
        }
      }

      var newdate = new Date(date*1000);
      var datestr = newdate.toLocaleDateString();

      var templ = params['res_item_tpl'];

      if (templ) {
        templ = templ.replace("[TITLE]", title);
        templ = templ.replace(/\[URL\]/g, url);

        if (templ.includes("[DATE]")) {
          if (date != '') { 
            templ = templ.replace("[DATE]", datestr);
          } else {
            templ = templ.replace("[DATE]", '');
          }
        }
        if (templ.includes("[SUMMARY]")) {
          if (summary != '') { 
            templ = templ.replace("[SUMMARY]", summary);
          } else {
            templ = templ.replace("[SUMMARY]", '');
          }
        }
        if (templ.includes("[TAGS]")) {
          if (tags != '') { 
            tags  = tags.join(",");
            tags  = tags.replace(/,/g, ", ");
            templ = templ.replace("[TAGS]", tags);
          } else {
            templ = templ.replace("[TAGS]", '');
          }
        }
        if (templ.includes("[SECTION]")) {
          if (section != '') { 
            templ = templ.replace("[SECTION]", '['+section+'] ');
          } else {
            templ = templ.replace("[SECTION]", '');
          }
        }
        results_content += templ;
        if (infos != '') {
          results_content += '<li>'+infos+'</li>';
        }
      }
    } 
    sOutput.innerHTML = results_header+tag_top+results_content+tag_bottom;
  } else {
    var noresult = '';
    if ((add_searchlink) && (add_searchlink != '')) {
      noresult += add_searchlink;
    }
    noresult += params['err_noresult'];
    sOutput.innerHTML = noresult;
  }
}

