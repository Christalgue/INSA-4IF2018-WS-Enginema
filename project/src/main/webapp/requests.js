
function loadSuggestions() {
  $.ajax({
    url: './ActionServlet',
    method: 'GET',
    data: {
      action: 'loadSuggestions'
    },
    dataType: 'json'
  }).done(function(data) {
    if (data.responseType === 'suggestions') {
      // Todo: display results in the side panel
      $('#query-result').html('');
      for (var i=0; i<data.responseContent.length; i++) {
        $('#query-result').append("<li>" + data.responseContent[i].resourceName + " " + data.responseContent[i].resourceType + "</li>");
      }
    }
  });
}

function queryByName() {
  var action = "queryByName";
  var query = $('#searchBar').val();
  
  $.ajax({
    url: './ActionServlet',
    method: 'GET',
    data: {
      action: action,
      query: query
    },
    dataType: 'json'
  }).done(function (data) {
    if (data.responseType === "queryResults") {
      $('#query-result').html('');
      for (var i=0; i<data.responseContent.length; i++) {
        $('#query-result').append("<li>" + data.responseContent[i].resourceName + " " + data.responseContent[i].resourceType + "</li>");
      }
    }
  });
}

function queryByUri(uri) {

}
