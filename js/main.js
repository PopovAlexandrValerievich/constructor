let image = $('#image');
let imageWrapper = $('.image__wrapper');
let imageWidth = 0;
let imageHeight = 0;

let imageX = 0;
let imageY = 0;

$(document).ready(function (){
    /* Uploading image */
    $('#image__input').change(function () {
        if (this.files && ((/\.(gif|jpe?g|png)$/i).test(this.files[0].name))){
            $('#image')
                .attr('src', URL.createObjectURL(this.files[0]))
                .on('load',function () {
                    imageWidth =  image.width();
                    imageHeight =  image.height();
                    imageX = image.offset().left;
                    imageY = image.offset().top;
                });

            /* Show constructor's menu */
            $('.image-constructor__btns').show();
        } else {
            alert('Неподдерживаемое расширение файла');
        }
    });

    /* Scaling image function */
    $('#image-scaling__btn').click(function () {
        /* Turning off the buttons */
        $('#image-scaling__btn, #image-rotate__btn, #image-drag__btn')
            .prop('disabled', true);

        $('body').css('touch-action', 'auto');
        $('#image').css('border', 'solid black 2px');
        $('#scaling__btn').show();
        $('.image__wrapper').css('resize', 'horizontal');
    });

    /* Rotate image function */
    $('#image-rotate__btn').click(function () {
        /* Turning off the buttons */
        $('#image-scaling__btn, #image-rotate__btn, #image-drag__btn')
            .prop('disabled', true);

        imageWrapper.css('overflow', 'inherit');
        image.css('border', 'solid black 2px');
        $('body').css('touch-action', 'none');
        $('#rotate__btn').show();

        let img = $('#image');
        let offset =  imageWrapper.offset();

        function mouseRotate(e){
            let centerX = offset.left +  imageWrapper.width() / 2;
            let centerY = offset.top +  imageWrapper.height() / 2;

            let mouseX = e.pageX;
            let mouseY = e.pageY;

            let radians = Math.atan2(mouseX - centerX, mouseY - centerY);
            let degree = (radians * (180 / Math.PI) * -1) + 90;

            imageWrapper
                .css('-moz-transform', 'rotate('+degree+'deg)')
                .css('-webkit-transform', 'rotate('+degree+'deg)')
                .css('-o-transform', 'rotate('+degree+'deg)')
                .css('-ms-transform', 'rotate('+degree+'deg)');
        }

        let bool = false;

        $('#rotate__btn').bind('mousedown pointerdown',function (e) {
            if (e.which === 1)
                bool = true;
        });

        $(document).bind('mouseup pointerup', function (e) {
            if (e.which === 1)
                bool = false;
        });

        $(document).bind('mousemove pointermove', function (e) {
            if (!bool) return;
            mouseRotate(e);
        });
    });

    /* Drag image function */
    $('#image-drag__btn').bind('mousedown touchstart',function () {
        /* Turning off the buttons */
        $('#image-scaling__btn, #image-rotate__btn, #image-drag__btn')
            .prop('disabled', true);
        image.css('border', 'solid black 2px');
        $('.image__wrapper').draggable({ disabled: false });

    });
 

    /* Save image function */
    $('#image-save__btn').click(function () {
        $('#rotate__btn').hide();
        $('#scaling__btn').hide();

        imageWrapper
            .css('resize', 'none')
            .off("mousemove","touchstart")
            .draggable({ disabled: true })
            .css('overflow', 'hidden');
        image.css('border', 'none');

        /* Turning on the buttons */
        $('#image-scaling__btn, #image-rotate__btn, #image-drag__btn')
            .prop('disabled', false);

        imageWidth = image.width();
        imageHeight = image.height();
        imageX = imageWrapper.offset().left;
        imageY = imageWrapper.offset().top;

        document.getElementById("pageY").value = imageY
        document.getElementById("pageX").value = imageX
        document.getElementById("width").value = imageWidth
        document.getElementById("height").value = imageHeight
    });
});