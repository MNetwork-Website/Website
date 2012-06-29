$(document).ready(function() {
  var opts = {collapseTimer: 4000};

  $.each(['beforeExpand', 'afterExpand', 'onCollapse'], function(i, callback) {
    opts[callback] = function(byUser) {
      var by, msg = '<div class="success">' + callback;

      if (callback == 'onCollapse') {
        msg += ' (' + (byUser ? 'user' : 'timer') + ')';
      }
      msg += '</div>';

      $(this).parent().parent().append(msg)
    }
  });

  $('dl.expander dd').eq(0).expander();
  $('dl.expander dd').slice(1).expander(opts);


  $('p.expander').expander({
    slicePoint: 100,
    widow: 2,
    expandSpeed: 0,
    userCollapseText: '[-]'
  });

  $('div.expander').expander({
    slicePoint: 100,
    widow: 2,
    expandSpeed: 0,
    userCollapseText: '[-]'
  });
});