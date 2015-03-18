/*
	Twenty by HTML5 UP
	html5up.net | @n33co
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

// Disable scroll zooming and bind back the click event
$(function () {
    //Quotes
    $.getJSON('../quotes.json', function (data) {
        $.each(data, function (index, d) {
            console.log("Name: " + d.Name);
            console.log("Quote: " + d.Quote);
        });
    });
});

$(function () {


    skel.init({
        reset: 'full',
        breakpoints: {
            global: {
                range: '*',
                href: 'css/style.css',
                containers: 1400,
                grid: {
                    gutters: 50
                }
            },
            wide: {
                range: '-1680',
                href: 'css/style-wide.css',
                containers: 1200,
                grid: {
                    zoom: -1,
                    gutters: 40
                }
            },
            normal: {
                range: '-1280',
                href: 'css/style-normal.css',
                containers: 960,
                viewport: {
                    scalable: false
                }
            },
            narrow: {
                range: '-980',
                href: 'css/style-narrow.css',
                containers: '95%',
                grid: {
                    zoom: 2
                }
            },
            narrower: {
                range: '-840',
                href: 'css/style-narrower.css',
                containers: '85%!',
                grid: {
                    zoom: 3
                }
            },
            mobile: {
                range: '-736',
                href: 'css/style-mobile.css',
                containers: '100%!',
                grid: {
                    zoom: 4
                }
            }
        },
        plugins: {
            layers: {
                config: {
                    mode: function () {
                        return (skel.vars.isMobile ? 'transform' : 'position');
                    }
                },
                topPanel: {
                    states: '/global/wide/normal/narrow/narrower/mobile',
                    position: 'top-center',
                    side: 'top',
                    hidden: true,
                    animation: 'pushY',
                    width: '100%',
                    height: 220,
                    html: '<nav data-action="navList" data-args="nav"></nav>',
                    clickToHide: true,
                    swipeToHide: false,
                    orientation: 'vertical'
                },
                topButton: {
                    states: '/global/wide/normal/narrow/narrower/mobile',
                    position: 'top-center',
                    width: 120,
                    height: 50,
                    html: '<span class="toggle" data-action="toggleLayer" data-args="topPanel"></span>'
                },
                sidePanel: {
                    states: '/global/wide/normal/narrow/narrower',
                    position: 'top-left',
                    side: 'left',
                    hidden: true,
                    animation: 'revealX',
                    width: 180,
                    height: '100%',
                    html: '<nav data-action="navList" data-args="nav"></nav>',
                    clickToHide: true,
                    orientation: 'vertical'
                },
                sideButton: {
                    states: '/global/wide/normal/narrow/narrower',
                    position: 'top-left',
                    width: 100,
                    height: 60,
                    html: '<span class="toggle" data-action="toggleLayer" data-args="sidePanel"></span>'
                }
            }
        }
    });

    $(function () {

        var $window = $(window),
            $body = $('body'),
            $header = $('#header'),
            $banner = $('#banner');

        // Disable animations/transitions until the page has loaded.
        $body.addClass('is-loading');

        $window.on('load', function () {
            $body.removeClass('is-loading');
        });

        // CSS polyfills (IE<9).
        if (skel.vars.IEVersion < 9)
            $(':last-child').addClass('last-child');

        // Scrolly links.
        $('.scrolly').scrolly(1000, -10);
        $('.scrolly-nomove').scrolly(1000, 0);

        // Dropdowns.
        //			$('#nav > ul').dropotron({
        //				mode: 'fade',
        //				noOpenerFade: true,
        //				expandMode: (skel.vars.isTouch ? 'click' : 'hover')
        //			});

        // Header.
        // If the header is using "alt" styling and #banner is present, use scrollwatch
        // to revert it back to normal styling once the user scrolls past the banner.
        // Note: This is disabled on mobile devices.
        if (!skel.vars.isMobile && $header.hasClass('alt') && $banner.length > 0) {

            $window.on('load', function () {

                $banner.scrollwatch({
                    delay: 400,
                    range: 1,
                    anchor: 'top',
                    on: function () {
                        //$header.addClass('unveal')
                        $header.addClass('alt reveal');
                    },
                    off: function () {
                        $header.removeClass('alt');
                        //$header.removeClass('unveal');
                    }
                });

            });

        }

    });

})