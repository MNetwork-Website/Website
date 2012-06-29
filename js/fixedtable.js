$(document).ready(function() {
    $('.offeringsTable').fixedHeaderTable({ width: '850', height: '250', footer: false, cloneHeadToFoot: false, autoShow: false });
    
    $('.offeringsTable').fixedHeaderTable('show', 200);
 $('.myTable02').fixedHeaderTable({ height: '250', footer: true, altClass: 'odd', themeClass: 'fancyTable' });
});