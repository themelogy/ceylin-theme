<!-- Head Libs -->
{!! Theme::script('vendor/jquery/jquery-1.11.1.min.js') !!}
{!! Theme::script('vendor/modernizr.custom.js') !!}

<!--[if lt IE 9]>
{!! Theme::script('vendor/html5shiv.js') !!}
{!! Theme::script('vendor/respond.min.js') !!}
<![endif]-->

<!-- JS Global -->
{!! Theme::script('vendor/bootstrap/js/bootstrap.min.js') !!}
{!! Theme::script('vendor/bootstrap-select/js/bootstrap-select.min.js') !!}
{!! Theme::script('vendor/superfish/js/superfish.min.js') !!}
{!! Theme::script('vendor/prettyphoto/js/jquery.prettyPhoto.js') !!}
{!! Theme::script('vendor/owl-carousel2/owl.carousel.min.js') !!}
{!! Theme::script('vendor/jquery.sticky.min.js') !!}
{!! Theme::script('vendor/jquery.easing.min.js') !!}
{!! Theme::script('vendor/jquery.smoothscroll.min.js') !!}
{!! Theme::script('vendor/swiper/dist/js/swiper.min.js') !!}
{!! Theme::script('vendor/datetimepicker/js/moment-with-locales.min.js') !!}
{!! Theme::script('vendor/datetimepicker/js/bootstrap-datetimepicker.min.js') !!}

<!-- JS Page Level -->
{!! Theme::script('js/theme-v1.js') !!}

@stack('js_inline')

<?php if (!isset($_SERVER['HTTP_USER_AGENT']) || stripos($_SERVER['HTTP_USER_AGENT'], 'Speed Insights') === false): ?>
{!! $googleAnalytics !!}
<?php endif; ?>