document.addEventListener('DOMContentLoaded', function() {
    // Query ALL elements with class "grid"
  const allGrids = document.querySelectorAll('.grid');

  allGrids.forEach(grid => {
    // wait for all images in .grid to load
    imagesLoaded(grid, function() {
      new Masonry(grid, {
        itemSelector: '.grid-item',
        columnWidth: '.grid-item',
        gutter: 16,           // 16px gutter between columns
        percentPosition: true
      });
    });
  });
});
