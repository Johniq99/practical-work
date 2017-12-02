;(function ($) {

  var list = $('.suggestions');
  var countries = window.countries;

  var state = {
    currentSearch: []
  };

  if (state.currentSearch.length <= 0) {
    list.hide();
  }

  $('.search').on('keyup', function (event) {
    var self = this;

    if (self.value.length > 0) {
      list.show();
    } else {
      list.hide();
    }

    state.currentSearch = [];

    countries.forEach(function (el) {
      if (event.target.value.length > 0) {
        if (!!~el.name.toLowerCase().indexOf(event.target.value.toLowerCase())) {
          state.currentSearch.push(el.name);
        }
      }
    });

    list.empty();

    if (state.currentSearch.length > 10) {
      list.append('<div><p>Scroll down<p></div>');
    } else {
      list.find('span').remove()
    }

    if (state.currentSearch.length === 0) {
      list.append('<li>No results</li>');
    }

    for (var i = 0; i < state.currentSearch.length; i++) {
      var li = document.createElement('LI');
      li.innerText = state.currentSearch[i];

      $(li).on('click', function (event) {
        self.value = event.target.innerText;
      });

      list.append(li);
    }

  });

})(jQuery);