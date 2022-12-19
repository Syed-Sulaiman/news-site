

$(document).ready(function() {


            console.log($('.submenu a').first().text());
            console.log($('.context-menu a').last().text());
            /* In JQuery we target id by using # insteadof keyword GetElementById */

            var el = document.getElementById('text');
            $(document).on('contextmenu', function() {
                return false;
            });

            $(document).on('mousedown', function(event) {
                event.stopPropagation();

                if (event.which == 3) {

                    $('.hidden').removeClass('shown');
                    if ($(event.target).is('img')) {
                        $('.saving, .newtab').addClass('shown');
                    } else if ($(event.target).is('a')) {
                        $('.newtab').addClass('shown');
                    }

                    console.log(event.pageY, event.pageX);

                    $('#context').css({
                        top: event.pageY,
                        left: event.pageX,
                    });

                    $('#context').fadeToggle();

                } else if (event.which == 1) {
                    $('#context').fadeOut();
                }
            })

                $('[href="https://google.com"]').on('click', function(event) {
                    console.log("Linking to Google.");
                    /*event.preventDefault();
                    return false;*/
                });

                $('[data-trigger="dropdown"]').on('mouseenter', function() {

                    var submenu = $('.submenu'); /* or var submenu = $(this).parent().find('submenu') */
                    submenu.fadeIn('500');

                    $('.profile-menu').on('mouseleave', function() {

                        submenu.fadeOut('500');
                    })

                });

                $('#go-button').on('click', function() {
                    alert("Thanks for Clicking");
                });

                $('#append, #prepend, #replace').on('click', function(e) {
                    var el = $(e.currentTarget);
                    var action = el.attr('id');
                    var content = $('.text').val();


                    if (action == "append") {
                        console.log("Appending...", content);
                        $('#main').append(content);

                    } else if (action == "prepend") {
                        console.log("Prepending...", content);
                        $('#main').prepend(content);

                    } else if (action == "replace") {
                        console.log("Replacing...");
                    }
                });

                $('p:contains("Lorem")').html("This has a Lorem in it ");

                /* We target class using . symbol instead of GetElementsByClass */
                /*$('.my-input').val("New Value");*/
                $('textarea').focusin(function() {
                    console.log("Focused in on textarea");
                });

                $('textarea').focusout(function() {
                    console.log("Focused out");
                });

                $('input').focusout(function() {
                    if ($(this).val().indexOf('#') > -1 || $(this).val().indexOf('.') > -1) {
                        $('.status').html("Valid Email");
                    }else {
                        $('.status').html("Your E-Mail is invalid. Please try again.");
                    }
                });
            });

