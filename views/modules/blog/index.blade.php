@extends('layouts.master')

@section('breadcrumbs')
    <!-- BREADCRUMBS -->
    <section class="page-section breadcrumbs text-right">
        <div class="container">
            <div class="page-header">
                <h1>{{ trans('blog::blog.title') }}</h1>
            </div>
            {!! Breadcrumbs::renderIfExists('blog') !!}
        </div>
    </section>
    <!-- /BREADCRUMBS -->
@endsection

@section('content')
    <div class="content-area">

        <!-- PAGE WITH SIDEBAR -->
        <section class="page-section with-sidebar">
            <div class="container">
                <div class="row">

                    @include('blog::partials.sidebar')

                    <!-- CONTENT -->
                    <div class="col-md-9 content" id="content">
                        @foreach($posts as $post)
                            <article class="post-wrap">
                                <div class="post-media">
                                    <a href="{{ $post->present()->firstImage(870,370,'fit',80) }}" data-gal="prettyPhoto"><img src="{{ $post->present()->firstImage(870,370,'fit',80) }}" alt=""></a>
                                </div>
                                <div class="post-header">
                                    <h2 class="post-title"><a href="{{ $post->url }}">{{ $post->title }}</a></h2>
                                    <div class="post-meta"><a href="#">{{ $post->author->fullname }}</a> / {{ $post->created_at->formatLocalized('d F Y') }} / <a href="{{ $post->category->url }}">{{ $post->category->name }}</a></div>
                                </div>
                                <div class="post-body">
                                    <div class="post-excerpt">
                                        <p>{{ $post->intro }}</p>
                                    </div>
                                </div>
                                <div class="post-footer">
                                    <span class="post-read-more"><a href="{{ $post->url }}" class="btn btn-theme btn-theme-transparent btn-icon-left">Devamını Oku</a></span>
                                </div>
                            </article>
                    @endforeach
                    <!-- Pagination -->
                        <div class="pagination-wrapper">
                            {{ $posts->render('blog::pagination.default') }}
                        </div>
                        <!-- /Pagination -->

                    </div>
                    <!-- /CONTENT -->

                </div>
            </div>
        </section>
        <!-- /PAGE WITH SIDEBAR -->

    </div>
@endsection