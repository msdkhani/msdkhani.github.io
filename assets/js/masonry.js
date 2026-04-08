$(document).ready(function() {
  // Skip Masonry on projects page — CSS Grid handles the 3-column layout
  if ($('.projects .grid').length) {
    return;
  }
  // Init Masonry for other grids (e.g. blog)
  var $grid = $('.grid').masonry({
    gutter: 10,
    horizontalOrder: true,
    itemSelector: '.grid-item',
  });
  // Layout Masonry after each image loads
  $grid.imagesLoaded().progress( function() {
    $grid.masonry('layout');
  });
});
