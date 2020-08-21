$(document).ready(function() {
    $('.icon-file').on('click', function() {
        var dURL = $(this).attr("data-url");
        var title = $(this).attr("data-title");
        var dmt = $(this).attr("data-media-type");
        var fileType = $(this).attr("data-file-type");
        if(dmt == 1){
            $(this).lightGallery({
                fullScreen: true,
                dynamic: true,
                dynamicEl: [{
                    "src": dURL,
                    "subHtml": "<h4>"+title+"</h4>"
                }]
            });
        }else if(dmt == 3){
            $(this).lightGallery({
                dynamic: true,
                fullScreen: true,
                dynamicEl: [{
                    html: '<video class="lg-video-object lg-html5" controls preload="none"><source src="'+dURL+'" type="video/'+fileType+'">Your browser does not support HTML5 video</video>\'',
                    "subHtml": "<h4>"+title+"</h4>"
                }]
            })
        }
        var fullUrl = window.location.href+"/"+$(this).text();
        if(fileType == "doc" || fileType == "docx" || fileType == "dotx"
            || fileType == "ppt" || fileType == "pptx" || fileType == "xls" || fileType == "xlsx"){
            window.open(" https://view.officeapps.live.com/op/view.aspx?src="+fullUrl);
        }else if(fileType == "pdf"){
            window.onload = function (){
               new PDFObject({ url: fullUrl }).embed();
            };
        }
    });
});