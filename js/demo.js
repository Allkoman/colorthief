/*! Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-canvas-draganddrop-touch-shiv-cssclasses-teststyles-hasevent-prefixes-css_pointerevents-file_api-load
 */

$(document).ready(function () {

    // ---------------------
    // Color Thief demo code
    // ---------------------
    // // Render example images
    // var examplesHTML = Mustache.to_html($('#image-section-template').html(), imageArray);
    // $('#example-images').append(examplesHTML);

    // Event handlers
    $(function () {
        $("#example-images >div").each(function(){
            var $this = $(this);
            var $imageSection = $this.closest('.image-section');
            var $colorThiefOutput = $imageSection.find('.color-thief-output');
            var $targetimage = $imageSection.find('.target-image');
            showColorsForImage($targetimage, $imageSection);
        });
    });
    var colorThief = new ColorThief();

    // Run Color Thief functions and display results below image.
    // We also log execution time of functions for display.
    var showColorsForImage = function ($image, $imageSection) {
        var image = $image[0];
        var start = Date.now();
        var color = colorThief.getColor(image);
        var elapsedTimeForGetColor = Date.now() - start;
        var palette = colorThief.getPalette(image);
        var elapsedTimeForGetPalette = Date.now() - start + elapsedTimeForGetColor;

        var colorThiefOutput = {
            color: color,
            palette: palette,
            elapsedTimeForGetColor: elapsedTimeForGetColor,
            elapsedTimeForGetPalette: elapsedTimeForGetPalette
        };
        var colorThiefOuputHTML = Mustache.to_html($('#color-thief-output-template').html(), colorThiefOutput);
        $imageSection.addClass('with-color-thief-output');
        $imageSection.find('.color-thief-output').append(colorThiefOuputHTML)
  };


  // Setup the drag and drop behavior if supported
//   if (Modernizr.draganddrop && !!window.FileReader && !isMobile()) {
//
//     $('#drag-drop').show();
//     var $dropZone = $('#drop-zone');
//     var handleDragEnter = function(event){
//       $dropZone.addClass('dragging');
//       return false;
//     };
//     var handleDragLeave = function(event){
//       $dropZone.removeClass('dragging');
//       return false;
//     };
//     var handleDragOver = function(event){
//       return false;
//     };
//     var handleDrop = function(event){
//       $dropZone.removeClass('dragging');
//       handleFiles(event.originalEvent.dataTransfer.files);
//       return false;
//     };
//     $dropZone
//       .on('dragenter', handleDragEnter)
//       .on('dragleave', handleDragLeave)
//       .on('dragover', handleDragOver)
//       .on('drop', handleDrop);
//   }
//
//   function handleFiles(files) {
//     var $draggedImages = $('#dragged-images');
//     var imageType      = /image.*/;
//     var fileCount      = files.length;
//
//     for (var i = 0; i < fileCount; i++) {
//       var file = files[i];
//
//       if (file.type.match(imageType)) {
//         var reader = new FileReader();
//         reader.onload = function(event) {
//             imageInfo = { images: [
//                 {'class': 'dropped-image', file: event.target.result}
//               ]};
//
//             var imageSectionHTML = Mustache.to_html($('#image-section-template').html(), imageInfo);
//             $draggedImages.prepend(imageSectionHTML);
//
//             var $imageSection = $draggedImages.find('.image-section').first();
//             var $image        = $('.dropped-image .target-image');
//
//             // Must wait for image to load in DOM, not just load from FileReader
//             $image.on('load', function() {
//               showColorsForImage($image, $imageSection);
//             });
//           };
//         reader.readAsDataURL(file);
//       } else {
//         alert('File must be a supported image type.');
//       }
//     }
//   }
//
//   // This is not good practice. :-P
//   function isMobile(){
//     // if we want a more complete list use this: http://detectmobilebrowsers.com/
//     // str.test() is more efficent than str.match()
//     // remember str.test is case sensitive
//     var isMobile = (/iphone|ipod|ipad|android|ie|blackberry|fennec/).test
//          (navigator.userAgent.toLowerCase());
//     return isMobile;
// }

});
