


<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# githubog: http://ogp.me/ns/fb/githubog#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=10">
        <title>js-sequence-diagrams/build/sequence-diagram-min.js at master · bramp/js-sequence-diagrams</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <link rel="logo" type="image/svg" href="https://github-media-downloads.s3.amazonaws.com/github-logo.svg" />
    <meta property="og:image" content="https://github.global.ssl.fastly.net/images/modules/logos_page/Octocat.png">
    <meta name="hostname" content="github-fe118-cp1-prd.iad.github.net">
    <meta name="ruby" content="ruby 1.9.3p194-tcs-github-tcmalloc (e1c0c3f392) [x86_64-linux]">
    <link rel="assets" href="https://github.global.ssl.fastly.net/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035/">
    <link rel="xhr-socket" href="/_sockets" />
    


    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="59D47FD1:1B80:4DA2A47:52A56B6D" name="octolytics-dimension-request_id" /><meta content="2311380" name="octolytics-actor-id" /><meta content="ddksr" name="octolytics-actor-login" /><meta content="c6a7188c70202e29da5821d2f52dfc665eb698fa397eb9efae69d440a97fb4dc" name="octolytics-actor-hash" />
    

    
    
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="AYE0Na0RuTjlK8F1m5c32ckfsCH0Y/1xAjBmNQkoZik=" name="csrf-token" />

    <link href="https://github.global.ssl.fastly.net/assets/github-1cddff501e45a3bd3dd9bd109289016b0a6f5078.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://github.global.ssl.fastly.net/assets/github2-ab9cfee14b0a6b4bf39a1d21231ba45f6267ce2e.css" media="all" rel="stylesheet" type="text/css" />
    

    

      <script src="https://github.global.ssl.fastly.net/assets/frameworks-5970f5a0a3dcc441d5f7ff74326ffd59bbe9388e.js" type="text/javascript"></script>
      <script src="https://github.global.ssl.fastly.net/assets/github-8ce88caabed1ff1adea938157241afc74c47eb91.js" type="text/javascript"></script>
      
      <meta http-equiv="x-pjax-version" content="dba60f32ae5c652b9101caacea4e86ac">

        <link data-pjax-transient rel='permalink' href='/bramp/js-sequence-diagrams/blob/4c64e16f366367939aa667ab396c02ed1dfef806/build/sequence-diagram-min.js'>
  <meta property="og:title" content="js-sequence-diagrams"/>
  <meta property="og:type" content="githubog:gitrepository"/>
  <meta property="og:url" content="https://github.com/bramp/js-sequence-diagrams"/>
  <meta property="og:image" content="https://github.global.ssl.fastly.net/images/gravatars/gravatar-user-420.png"/>
  <meta property="og:site_name" content="GitHub"/>
  <meta property="og:description" content="js-sequence-diagrams - Draws simple SVG sequence diagrams from textual representation of the diagram"/>

  <meta name="description" content="js-sequence-diagrams - Draws simple SVG sequence diagrams from textual representation of the diagram" />

  <meta content="160627" name="octolytics-dimension-user_id" /><meta content="bramp" name="octolytics-dimension-user_login" /><meta content="6736646" name="octolytics-dimension-repository_id" /><meta content="bramp/js-sequence-diagrams" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="6736646" name="octolytics-dimension-repository_network_root_id" /><meta content="bramp/js-sequence-diagrams" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/bramp/js-sequence-diagrams/commits/master.atom" rel="alternate" title="Recent Commits to js-sequence-diagrams:master" type="application/atom+xml" />

  </head>


  <body class="logged_in  env-production linux vis-public page-blob">
    <div class="wrapper">
      
      
      
      


      <div class="header header-logged-in true">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/">
  <span class="mega-octicon octicon-mark-github"></span>
</a>

    
    <a href="/notifications" class="notification-indicator tooltipped downwards" data-gotokey="n" title="You have no unread notifications">
        <span class="mail-status all-read"></span>
</a>

      <div class="command-bar js-command-bar  in-repository">
          <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">

<input type="text" data-hotkey="/ s" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
    data-username="ddksr"
      data-repo="bramp/js-sequence-diagrams"
      data-branch="master"
      data-sha="8e734824b1eb441a0bc435db32cb21577a094a42"
  >

    <input type="hidden" name="nwo" value="bramp/js-sequence-diagrams" />

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item js-this-repository-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked" />
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item js-all-repositories-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global" />
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="octicon help tooltipped downwards" title="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

</form>
        <ul class="top-nav">
          <li class="explore"><a href="/explore">Explore</a></li>
            <li><a href="https://gist.github.com">Gist</a></li>
            <li><a href="/blog">Blog</a></li>
          <li><a href="https://help.github.com">Help</a></li>
        </ul>
      </div>

    


  <ul id="user-links">
    <li>
      <a href="/ddksr" class="name">
        <img height="20" src="https://2.gravatar.com/avatar/f9846e7d235aca2dbe49c44d1c7668fe?d=https%3A%2F%2Fidenticons.github.com%2Fd2654987da6d7c74ab23c6c07a560133.png&amp;r=x&amp;s=140" width="20" /> ddksr
      </a>
    </li>

      <li>
        <a href="/new" id="new_repo" class="tooltipped downwards" title="Create a new repo" aria-label="Create a new repo">
          <span class="octicon octicon-repo-create"></span>
        </a>
      </li>

      <li>
        <a href="/settings/profile" id="account_settings"
          class="tooltipped downwards"
          aria-label="Account settings "
          title="Account settings ">
          <span class="octicon octicon-tools"></span>
        </a>
      </li>
      <li>
        <a class="tooltipped downwards" href="/logout" data-method="post" id="logout" title="Sign out" aria-label="Sign out">
          <span class="octicon octicon-log-out"></span>
        </a>
      </li>

  </ul>

<div class="js-new-dropdown-contents hidden">
  

<ul class="dropdown-menu">
  <li>
    <a href="/new"><span class="octicon octicon-repo-create"></span> New repository</a>
  </li>
  <li>
    <a href="/organizations/new"><span class="octicon octicon-organization"></span> New organization</a>
  </li>



    <li class="section-title">
      <span title="bramp/js-sequence-diagrams">This repository</span>
    </li>
      <li>
        <a href="/bramp/js-sequence-diagrams/issues/new"><span class="octicon octicon-issue-opened"></span> New issue</a>
      </li>
</ul>

</div>


    
  </div>
</div>

      

      




          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        

<ul class="pagehead-actions">

    <li class="subscription">
      <form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="AYE0Na0RuTjlK8F1m5c32ckfsCH0Y/1xAjBmNQkoZik=" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="6736646" />

    <div class="select-menu js-menu-container js-select-menu">
      <a class="social-count js-social-count" href="/bramp/js-sequence-diagrams/watchers">
        96
      </a>
      <span class="minibutton select-menu-button with-count js-menu-target" role="button" tabindex="0">
        <span class="js-select-button">
          <span class="octicon octicon-eye-watch"></span>
          Watch
        </span>
      </span>

      <div class="select-menu-modal-holder">
        <div class="select-menu-modal subscription-menu-modal js-menu-content">
          <div class="select-menu-header">
            <span class="select-menu-title">Notification status</span>
            <span class="octicon octicon-remove-close js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-list js-navigation-container" role="menu">

            <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                <h4>Not watching</h4>
                <span class="description">You only receive notifications for conversations in which you participate or are @mentioned.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye-watch"></span>
                  Watch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                <h4>Watching</h4>
                <span class="description">You receive notifications for all conversations in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye-unwatch"></span>
                  Unwatch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_ignore" name="do" type="radio" value="ignore" />
                <h4>Ignoring</h4>
                <span class="description">You do not receive any notifications for conversations in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-mute"></span>
                  Stop ignoring
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

</form>
    </li>

  <li>
  

  <div class="js-toggler-container js-social-container starring-container ">
    <a href="/bramp/js-sequence-diagrams/unstar"
      class="minibutton with-count js-toggler-target star-button starred upwards"
      title="Unstar this repository" data-remote="true" data-method="post" rel="nofollow">
      <span class="octicon octicon-star-delete"></span><span class="text">Unstar</span>
    </a>

    <a href="/bramp/js-sequence-diagrams/star"
      class="minibutton with-count js-toggler-target star-button unstarred upwards"
      title="Star this repository" data-remote="true" data-method="post" rel="nofollow">
      <span class="octicon octicon-star"></span><span class="text">Star</span>
    </a>

      <a class="social-count js-social-count" href="/bramp/js-sequence-diagrams/stargazers">
        1,636
      </a>
  </div>

  </li>


        <li>
          <a href="/bramp/js-sequence-diagrams/fork" class="minibutton with-count js-toggler-target fork-button lighter upwards" title="Fork this repo" rel="facebox nofollow">
            <span class="octicon octicon-git-branch-create"></span><span class="text">Fork</span>
          </a>
          <a href="/bramp/js-sequence-diagrams/network" class="social-count">173</a>
        </li>


</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="repo-label"><span>public</span></span>
          <span class="mega-octicon octicon-repo"></span>
          <span class="author">
            <a href="/bramp" class="url fn" itemprop="url" rel="author"><span itemprop="title">bramp</span></a>
          </span>
          <span class="repohead-name-divider">/</span>
          <strong><a href="/bramp/js-sequence-diagrams" class="js-current-repository js-repo-home-link">js-sequence-diagrams</a></strong>

          <span class="page-context-loader">
            <img alt="Octocat-spinner-32" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">

      <div class="repository-with-sidebar repo-container  ">

        <div class="repository-sidebar">
            

<div class="sunken-menu vertical-right repo-nav js-repo-nav js-repository-container-pjax js-octicon-loaders">
  <div class="sunken-menu-contents">
    <ul class="sunken-menu-group">
      <li class="tooltipped leftwards" title="Code">
        <a href="/bramp/js-sequence-diagrams" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-gotokey="c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_tags repo_branches /bramp/js-sequence-diagrams">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped leftwards" title="Issues">
          <a href="/bramp/js-sequence-diagrams/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-gotokey="i" data-selected-links="repo_issues /bramp/js-sequence-diagrams/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class='counter'>22</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped leftwards" title="Pull Requests">
        <a href="/bramp/js-sequence-diagrams/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-gotokey="p" data-selected-links="repo_pulls /bramp/js-sequence-diagrams/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class='counter'>1</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


        <li class="tooltipped leftwards" title="Wiki">
          <a href="/bramp/js-sequence-diagrams/wiki" aria-label="Wiki" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_wiki /bramp/js-sequence-diagrams/wiki">
            <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>
    </ul>
    <div class="sunken-menu-separator"></div>
    <ul class="sunken-menu-group">

      <li class="tooltipped leftwards" title="Pulse">
        <a href="/bramp/js-sequence-diagrams/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="pulse /bramp/js-sequence-diagrams/pulse">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped leftwards" title="Graphs">
        <a href="/bramp/js-sequence-diagrams/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_graphs repo_contributors /bramp/js-sequence-diagrams/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped leftwards" title="Network">
        <a href="/bramp/js-sequence-diagrams/network" aria-label="Network" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-selected-links="repo_network /bramp/js-sequence-diagrams/network">
          <span class="octicon octicon-git-branch"></span> <span class="full-word">Network</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
    </ul>


  </div>
</div>

            <div class="only-with-full-nav">
              

  

<div class="clone-url "
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><strong>HTTPS</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/bramp/js-sequence-diagrams.git" readonly="readonly">

    <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/bramp/js-sequence-diagrams.git" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>

  

<div class="clone-url open"
  data-protocol-type="ssh"
  data-url="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone">
  <h3><strong>SSH</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="git@github.com:bramp/js-sequence-diagrams.git" readonly="readonly">

    <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="git@github.com:bramp/js-sequence-diagrams.git" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><strong>Subversion</strong> checkout URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/bramp/js-sequence-diagrams" readonly="readonly">

    <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/bramp/js-sequence-diagrams" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>


<p class="clone-options">You can clone with
      <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>,
      <a href="#" class="js-clone-selector" data-protocol="ssh">SSH</a>,
      or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <span class="octicon help tooltipped upwards" title="Get help on which URL is right for you.">
    <a href="https://help.github.com/articles/which-remote-url-should-i-use">
    <span class="octicon octicon-question"></span>
    </a>
  </span>
</p>



              <a href="/bramp/js-sequence-diagrams/archive/master.zip"
                 class="minibutton sidebar-button"
                 title="Download this repository as a zip file"
                 rel="nofollow">
                <span class="octicon octicon-cloud-download"></span>
                Download ZIP
              </a>
            </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:d59d2caeb526775f64564313de12fae8 -->

<p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

<a href="/bramp/js-sequence-diagrams/find/master" data-pjax data-hotkey="t" class="js-show-file-finder" style="display:none">Show File Finder</a>

<div class="file-navigation">
  

<div class="select-menu js-menu-container js-select-menu" >
  <span class="minibutton select-menu-button js-menu-target" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    role="button" aria-label="Switch branches or tags" tabindex="0">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax>

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-remove-close js-menu-close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/bramp/js-sequence-diagrams/blob/gh-pages/build/sequence-diagram-min.js"
                 data-name="gh-pages"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="gh-pages">gh-pages</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/bramp/js-sequence-diagrams/blob/master/build/sequence-diagram-min.js"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="master">master</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/bramp/js-sequence-diagrams/tree/v1.0.4/build/sequence-diagram-min.js"
                 data-name="v1.0.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.0.4">v1.0.4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/bramp/js-sequence-diagrams/tree/v1.0.3/build/sequence-diagram-min.js"
                 data-name="v1.0.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.0.3">v1.0.3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/bramp/js-sequence-diagrams/tree/v1.0.2/build/sequence-diagram-min.js"
                 data-name="v1.0.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.0.2">v1.0.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/bramp/js-sequence-diagrams/tree/v1.0.1/build/sequence-diagram-min.js"
                 data-name="v1.0.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.0.1">v1.0.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/bramp/js-sequence-diagrams/tree/v1.0/build/sequence-diagram-min.js"
                 data-name="v1.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.0">v1.0</a>
            </div> <!-- /.select-menu-item -->
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/bramp/js-sequence-diagrams" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">js-sequence-diagrams</span></a></span></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/bramp/js-sequence-diagrams/tree/master/build" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">build</span></a></span><span class="separator"> / </span><strong class="final-path">sequence-diagram-min.js</strong> <span class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="build/sequence-diagram-min.js" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>


  <div class="commit commit-loader file-history-tease js-deferred-content" data-url="/bramp/js-sequence-diagrams/contributors/master/build/sequence-diagram-min.js">
    Fetching contributors…

    <div class="participation">
      <p class="loader-loading"><img alt="Octocat-spinner-32-eaf2f5" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32-EAF2F5.gif" width="16" /></p>
      <p class="loader-error">Cannot retrieve contributors at this time</p>
    </div>
  </div>

<div id="files" class="bubble">
  <div class="file">
    <div class="meta">
      <div class="info">
        <span class="icon"><b class="octicon octicon-file-text"></b></span>
        <span class="mode" title="File Mode">file</span>
          <span>8 lines (8 sloc)</span>
        <span>87.75 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
                <a class="minibutton tooltipped upwards"
                   title="Clicking this button will automatically fork this project so you can edit the file"
                   href="/bramp/js-sequence-diagrams/edit/master/build/sequence-diagram-min.js"
                   data-method="post" rel="nofollow">Edit</a>
          <a href="/bramp/js-sequence-diagrams/raw/master/build/sequence-diagram-min.js" class="button minibutton " id="raw-url">Raw</a>
            <a href="/bramp/js-sequence-diagrams/blame/master/build/sequence-diagram-min.js" class="button minibutton ">Blame</a>
          <a href="/bramp/js-sequence-diagrams/commits/master/build/sequence-diagram-min.js" class="button minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->
          <a class="minibutton danger empty-icon tooltipped downwards"
             href="/bramp/js-sequence-diagrams/delete/master/build/sequence-diagram-min.js"
             title="Fork this project and delete file"
             data-method="post" data-test-id="delete-blob-file" rel="nofollow">
          Delete
        </a>
      </div><!-- /.actions -->

    </div>
        <div class="blob-wrapper data type-javascript js-blob-data">
        <table class="file-code file-diff">
          <tr class="file-code-line">
            <td class="blob-line-nums">
              <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>

            </td>
            <td class="blob-line-code">
                  <div class='line' id='LC1'>/** js sequence diagrams 1.0.4</div><div class='line' id='LC2'>&nbsp;*  http://bramp.github.io/js-sequence-diagrams/</div><div class='line' id='LC3'>&nbsp;*  (c) 2012-2013 Andrew Brampton (bramp.net)</div><div class='line' id='LC4'>&nbsp;*  @license Simplified BSD license.</div><div class='line' id='LC5'>&nbsp;*/</div><div class='line' id='LC6'>!function(){&quot;use strict&quot;;function Diagram(){this.title=void 0,this.actors=[],this.signals=[]}function ParseError(message,hash){_.extend(this,hash),this.name=&quot;ParseError&quot;,this.message=message||&quot;&quot;}Diagram.prototype.getActor=function(alias){var s=/^(.+) as (\S+)$/i.exec(alias.trim());s?(name=s[1].trim(),alias=s[2].trim()):name=alias.trim(),name=name.replace(/\\n/gm,&quot;\n&quot;);var i,actors=this.actors;for(i in actors)if(actors[i].alias==alias)return actors[i];return i=actors.push(new Diagram.Actor(alias,name,actors.length)),actors[i-1]},Diagram.prototype.setTitle=function(title){this.title=title},Diagram.prototype.addSignal=function(signal){this.signals.push(signal)},Diagram.Actor=function(alias,name,index){this.alias=alias,this.name=name,this.index=index},Diagram.Signal=function(actorA,signaltype,actorB,message){this.type=&quot;Signal&quot;,this.actorA=actorA,this.actorB=actorB,this.linetype=3&amp;signaltype,this.arrowtype=3&amp;signaltype&gt;&gt;2,this.message=message},Diagram.Signal.prototype.isSelf=function(){return this.actorA.index==this.actorB.index},Diagram.Note=function(actor,placement,message){if(this.type=&quot;Note&quot;,this.actor=actor,this.placement=placement,this.message=message,this.hasManyActors()&amp;&amp;actor[0]==actor[1])throw new Error(&quot;Note should be over two different actors&quot;)},Diagram.Note.prototype.hasManyActors=function(){return _.isArray(this.actor)},Diagram.LINETYPE={SOLID:0,DOTTED:1},Diagram.ARROWTYPE={FILLED:0,OPEN:1},Diagram.PLACEMENT={LEFTOF:0,RIGHTOF:1,OVER:2};var grammar=function(){function Parser(){this.yy={}}var parser={trace:function(){},yy:{},symbols_:{error:2,start:3,document:4,EOF:5,line:6,statement:7,NL:8,participant:9,actor:10,signal:11,note_statement:12,title:13,message:14,note:15,placement:16,over:17,actor_pair:18,&quot;,&quot;:19,left_of:20,right_of:21,signaltype:22,ACTOR:23,linetype:24,arrowtype:25,LINE:26,DOTLINE:27,ARROW:28,OPENARROW:29,MESSAGE:30,$accept:0,$end:1},terminals_:{2:&quot;error&quot;,5:&quot;EOF&quot;,8:&quot;NL&quot;,9:&quot;participant&quot;,13:&quot;title&quot;,15:&quot;note&quot;,17:&quot;over&quot;,19:&quot;,&quot;,20:&quot;left_of&quot;,21:&quot;right_of&quot;,23:&quot;ACTOR&quot;,26:&quot;LINE&quot;,27:&quot;DOTLINE&quot;,28:&quot;ARROW&quot;,29:&quot;OPENARROW&quot;,30:&quot;MESSAGE&quot;},productions_:[0,[3,2],[4,0],[4,2],[6,1],[6,1],[7,2],[7,1],[7,1],[7,2],[12,4],[12,4],[18,1],[18,3],[16,1],[16,1],[11,4],[10,1],[22,2],[22,1],[24,1],[24,1],[25,1],[25,1],[14,1]],performAction:function(yytext,yyleng,yylineno,yy,yystate,$$){var $0=$$.length-1;switch(yystate){case 1:return yy;case 4:break;case 6:$$[$0];break;case 7:yy.addSignal($$[$0]);break;case 8:yy.addSignal($$[$0]);break;case 9:yy.setTitle($$[$0]);break;case 10:this.$=new Diagram.Note($$[$0-1],$$[$0-2],$$[$0]);break;case 11:this.$=new Diagram.Note($$[$0-1],Diagram.PLACEMENT.OVER,$$[$0]);break;case 12:this.$=$$[$0];break;case 13:this.$=[$$[$0-2],$$[$0]];break;case 14:this.$=Diagram.PLACEMENT.LEFTOF;break;case 15:this.$=Diagram.PLACEMENT.RIGHTOF;break;case 16:this.$=new Diagram.Signal($$[$0-3],$$[$0-2],$$[$0-1],$$[$0]);break;case 17:this.$=yy.getActor($$[$0]);break;case 18:this.$=$$[$0-1]|$$[$0]&lt;&lt;2;break;case 19:this.$=$$[$0];break;case 20:this.$=Diagram.LINETYPE.SOLID;break;case 21:this.$=Diagram.LINETYPE.DOTTED;break;case 22:this.$=Diagram.ARROWTYPE.FILLED;break;case 23:this.$=Diagram.ARROWTYPE.OPEN;break;case 24:this.$=$$[$0].substring(1).trim().replace(/\\n/gm,&quot;\n&quot;)}},table:[{3:1,4:2,5:[2,2],8:[2,2],9:[2,2],13:[2,2],15:[2,2],23:[2,2]},{1:[3]},{5:[1,3],6:4,7:5,8:[1,6],9:[1,7],10:11,11:8,12:9,13:[1,10],15:[1,12],23:[1,13]},{1:[2,1]},{5:[2,3],8:[2,3],9:[2,3],13:[2,3],15:[2,3],23:[2,3]},{5:[2,4],8:[2,4],9:[2,4],13:[2,4],15:[2,4],23:[2,4]},{5:[2,5],8:[2,5],9:[2,5],13:[2,5],15:[2,5],23:[2,5]},{10:14,23:[1,13]},{5:[2,7],8:[2,7],9:[2,7],13:[2,7],15:[2,7],23:[2,7]},{5:[2,8],8:[2,8],9:[2,8],13:[2,8],15:[2,8],23:[2,8]},{14:15,30:[1,16]},{22:17,24:18,26:[1,19],27:[1,20]},{16:21,17:[1,22],20:[1,23],21:[1,24]},{5:[2,17],8:[2,17],9:[2,17],13:[2,17],15:[2,17],19:[2,17],23:[2,17],26:[2,17],27:[2,17],30:[2,17]},{5:[2,6],8:[2,6],9:[2,6],13:[2,6],15:[2,6],23:[2,6]},{5:[2,9],8:[2,9],9:[2,9],13:[2,9],15:[2,9],23:[2,9]},{5:[2,24],8:[2,24],9:[2,24],13:[2,24],15:[2,24],23:[2,24]},{10:25,23:[1,13]},{23:[2,19],25:26,28:[1,27],29:[1,28]},{23:[2,20],28:[2,20],29:[2,20]},{23:[2,21],28:[2,21],29:[2,21]},{10:29,23:[1,13]},{10:31,18:30,23:[1,13]},{23:[2,14]},{23:[2,15]},{14:32,30:[1,16]},{23:[2,18]},{23:[2,22]},{23:[2,23]},{14:33,30:[1,16]},{14:34,30:[1,16]},{19:[1,35],30:[2,12]},{5:[2,16],8:[2,16],9:[2,16],13:[2,16],15:[2,16],23:[2,16]},{5:[2,10],8:[2,10],9:[2,10],13:[2,10],15:[2,10],23:[2,10]},{5:[2,11],8:[2,11],9:[2,11],13:[2,11],15:[2,11],23:[2,11]},{10:36,23:[1,13]},{30:[2,13]}],defaultActions:{3:[2,1],23:[2,14],24:[2,15],26:[2,18],27:[2,22],28:[2,23],36:[2,13]},parseError:function(str,hash){if(!hash.recoverable)throw new Error(str);this.trace(str)},parse:function(input){function lex(){var token;return token=self.lexer.lex()||EOF,&quot;number&quot;!=typeof token&amp;&amp;(token=self.symbols_[token]||token),token}var self=this,stack=[0],vstack=[null],lstack=[],table=this.table,yytext=&quot;&quot;,yylineno=0,yyleng=0,recovering=0,TERROR=2,EOF=1;this.lexer.setInput(input),this.lexer.yy=this.yy,this.yy.lexer=this.lexer,this.yy.parser=this,&quot;undefined&quot;==typeof this.lexer.yylloc&amp;&amp;(this.lexer.yylloc={});var yyloc=this.lexer.yylloc;lstack.push(yyloc);var ranges=this.lexer.options&amp;&amp;this.lexer.options.ranges;this.parseError=&quot;function&quot;==typeof this.yy.parseError?this.yy.parseError:Object.getPrototypeOf(this).parseError;for(var symbol,preErrorSymbol,state,action,r,p,len,newState,expected,yyval={};;){if(state=stack[stack.length-1],this.defaultActions[state]?action=this.defaultActions[state]:((null===symbol||&quot;undefined&quot;==typeof symbol)&amp;&amp;(symbol=lex()),action=table[state]&amp;&amp;table[state][symbol]),&quot;undefined&quot;==typeof action||!action.length||!action[0]){var errStr=&quot;&quot;;expected=[];for(p in table[state])this.terminals_[p]&amp;&amp;p&gt;TERROR&amp;&amp;expected.push(&quot;&#39;&quot;+this.terminals_[p]+&quot;&#39;&quot;);errStr=this.lexer.showPosition?&quot;Parse error on line &quot;+(yylineno+1)+&quot;:\n&quot;+this.lexer.showPosition()+&quot;\nExpecting &quot;+expected.join(&quot;, &quot;)+&quot;, got &#39;&quot;+(this.terminals_[symbol]||symbol)+&quot;&#39;&quot;:&quot;Parse error on line &quot;+(yylineno+1)+&quot;: Unexpected &quot;+(symbol==EOF?&quot;end of input&quot;:&quot;&#39;&quot;+(this.terminals_[symbol]||symbol)+&quot;&#39;&quot;),this.parseError(errStr,{text:this.lexer.match,token:this.terminals_[symbol]||symbol,line:this.lexer.yylineno,loc:yyloc,expected:expected})}if(action[0]instanceof Array&amp;&amp;action.length&gt;1)throw new Error(&quot;Parse Error: multiple actions possible at state: &quot;+state+&quot;, token: &quot;+symbol);switch(action[0]){case 1:stack.push(symbol),vstack.push(this.lexer.yytext),lstack.push(this.lexer.yylloc),stack.push(action[1]),symbol=null,preErrorSymbol?(symbol=preErrorSymbol,preErrorSymbol=null):(yyleng=this.lexer.yyleng,yytext=this.lexer.yytext,yylineno=this.lexer.yylineno,yyloc=this.lexer.yylloc,recovering&gt;0&amp;&amp;recovering--);break;case 2:if(len=this.productions_[action[1]][1],yyval.$=vstack[vstack.length-len],yyval._$={first_line:lstack[lstack.length-(len||1)].first_line,last_line:lstack[lstack.length-1].last_line,first_column:lstack[lstack.length-(len||1)].first_column,last_column:lstack[lstack.length-1].last_column},ranges&amp;&amp;(yyval._$.range=[lstack[lstack.length-(len||1)].range[0],lstack[lstack.length-1].range[1]]),r=this.performAction.call(yyval,yytext,yyleng,yylineno,this.yy,action[1],vstack,lstack),&quot;undefined&quot;!=typeof r)return r;len&amp;&amp;(stack=stack.slice(0,2*-1*len),vstack=vstack.slice(0,-1*len),lstack=lstack.slice(0,-1*len)),stack.push(this.productions_[action[1]][0]),vstack.push(yyval.$),lstack.push(yyval._$),newState=table[stack[stack.length-2]][stack[stack.length-1]],stack.push(newState);break;case 3:return!0}}return!0}},lexer=function(){var lexer={EOF:1,parseError:function(str,hash){if(!this.yy.parser)throw new Error(str);this.yy.parser.parseError(str,hash)},setInput:function(input){return this._input=input,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match=&quot;&quot;,this.conditionStack=[&quot;INITIAL&quot;],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&amp;&amp;(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var ch=this._input[0];this.yytext+=ch,this.yyleng++,this.offset++,this.match+=ch,this.matched+=ch;var lines=ch.match(/(?:\r\n?|\n).*/g);return lines?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&amp;&amp;this.yylloc.range[1]++,this._input=this._input.slice(1),ch},unput:function(ch){var len=ch.length,lines=ch.split(/(?:\r\n?|\n)/g);this._input=ch+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-len-1),this.offset-=len;var oldLines=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),lines.length-1&amp;&amp;(this.yylineno-=lines.length-1);var r=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:lines?(lines.length===oldLines.length?this.yylloc.first_column:0)+oldLines[oldLines.length-lines.length].length-lines[0].length:this.yylloc.first_column-len},this.options.ranges&amp;&amp;(this.yylloc.range=[r[0],r[0]+this.yyleng-len]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError(&quot;Lexical error on line &quot;+(this.yylineno+1)+&quot;. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n&quot;+this.showPosition(),{text:&quot;&quot;,token:null,line:this.yylineno})},less:function(n){this.unput(this.match.slice(n))},pastInput:function(){var past=this.matched.substr(0,this.matched.length-this.match.length);return(past.length&gt;20?&quot;...&quot;:&quot;&quot;)+past.substr(-20).replace(/\n/g,&quot;&quot;)},upcomingInput:function(){var next=this.match;return next.length&lt;20&amp;&amp;(next+=this._input.substr(0,20-next.length)),(next.substr(0,20)+(next.length&gt;20?&quot;...&quot;:&quot;&quot;)).replace(/\n/g,&quot;&quot;)},showPosition:function(){var pre=this.pastInput(),c=new Array(pre.length+1).join(&quot;-&quot;);return pre+this.upcomingInput()+&quot;\n&quot;+c+&quot;^&quot;},test_match:function(match,indexed_rule){var token,lines,backup;if(this.options.backtrack_lexer&amp;&amp;(backup={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&amp;&amp;(backup.yylloc.range=this.yylloc.range.slice(0))),lines=match[0].match(/(?:\r\n?|\n).*/g),lines&amp;&amp;(this.yylineno+=lines.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:lines?lines[lines.length-1].length-lines[lines.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+match[0].length},this.yytext+=match[0],this.match+=match[0],this.matches=match,this.yyleng=this.yytext.length,this.options.ranges&amp;&amp;(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(match[0].length),this.matched+=match[0],token=this.performAction.call(this,this.yy,this,indexed_rule,this.conditionStack[this.conditionStack.length-1]),this.done&amp;&amp;this._input&amp;&amp;(this.done=!1),token)return token;if(this._backtrack){for(var k in backup)this[k]=backup[k];return!1}return!1},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var token,match,tempMatch,index;this._more||(this.yytext=&quot;&quot;,this.match=&quot;&quot;);for(var rules=this._currentRules(),i=0;i&lt;rules.length;i++)if(tempMatch=this._input.match(this.rules[rules[i]]),tempMatch&amp;&amp;(!match||tempMatch[0].length&gt;match[0].length)){if(match=tempMatch,index=i,this.options.backtrack_lexer){if(token=this.test_match(tempMatch,rules[i]),token!==!1)return token;if(this._backtrack){match=!1;continue}return!1}if(!this.options.flex)break}return match?(token=this.test_match(match,rules[index]),token!==!1?token:!1):&quot;&quot;===this._input?this.EOF:this.parseError(&quot;Lexical error on line &quot;+(this.yylineno+1)+&quot;. Unrecognized text.\n&quot;+this.showPosition(),{text:&quot;&quot;,token:null,line:this.yylineno})},lex:function(){var r=this.next();return r?r:this.lex()},begin:function(condition){this.conditionStack.push(condition)},popState:function(){var n=this.conditionStack.length-1;return n&gt;0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&amp;&amp;this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(n){return n=this.conditionStack.length-1-Math.abs(n||0),n&gt;=0?this.conditionStack[n]:&quot;INITIAL&quot;},pushState:function(condition){this.begin(condition)},stateStackSize:function(){return this.conditionStack.length},options:{&quot;case-insensitive&quot;:!0},performAction:function(yy,yy_,$avoiding_name_collisions,YY_START){switch($avoiding_name_collisions){case 0:return 8;case 1:break;case 2:break;case 3:return 9;case 4:return 20;case 5:return 21;case 6:return 17;case 7:return 15;case 8:return 13;case 9:return 19;case 10:return 23;case 11:return 27;case 12:return 26;case 13:return 29;case 14:return 28;case 15:return 30;case 16:return 5;case 17:return&quot;INVALID&quot;}},rules:[/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:#[^\n]*)/i,/^(?:participant\b)/i,/^(?:left of\b)/i,/^(?:right of\b)/i,/^(?:over\b)/i,/^(?:note\b)/i,/^(?:title\b)/i,/^(?:,)/i,/^(?:[^\-&gt;:\n,]+)/i,/^(?:--)/i,/^(?:-)/i,/^(?:&gt;&gt;)/i,/^(?:&gt;)/i,/^(?:[^#\n]+)/i,/^(?:$)/i,/^(?:.)/i],conditions:{INITIAL:{rules:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],inclusive:!0}}};return lexer}();return parser.lexer=lexer,Parser.prototype=parser,parser.Parser=Parser,new Parser}();&quot;undefined&quot;!=typeof require&amp;&amp;&quot;undefined&quot;!=typeof exports&amp;&amp;(exports.parser=grammar,exports.Parser=grammar.Parser,exports.parse=function(){return grammar.parse.apply(grammar,arguments)},exports.main=function(args){args[1]||(console.log(&quot;Usage: &quot;+args[0]+&quot; FILE&quot;),process.exit(1));var source=require(&quot;fs&quot;).readFileSync(require(&quot;path&quot;).normalize(args[1]),&quot;utf8&quot;);return exports.parser.parse(source)},&quot;undefined&quot;!=typeof module&amp;&amp;require.main===module&amp;&amp;exports.main(process.argv.slice(1))),ParseError.prototype=new Error,Diagram.ParseError=ParseError,grammar.parseError=function(message,hash){throw new ParseError(message,hash)},Diagram.parse=function(input){return grammar.yy=new Diagram,grammar.parse(input)},this.Diagram=Diagram}.call(this),&quot;undefined&quot;!=typeof jQuery&amp;&amp;function($){$.fn.sequenceDiagram=function(options){return this.each(function(){var $this=$(this),diagram=Diagram.parse($this.text());$this.html(&quot;&quot;),diagram.drawSVG(this,options)})}}(jQuery),Raphael.registerFont({w:209,face:{&quot;font-family&quot;:&quot;daniel&quot;,&quot;font-weight&quot;:700,&quot;font-stretch&quot;:&quot;normal&quot;,&quot;units-per-em&quot;:&quot;360&quot;,&quot;panose-1&quot;:&quot;2 11 8 0 0 0 0 0 0 0&quot;,ascent:&quot;288&quot;,descent:&quot;-72&quot;,&quot;x-height&quot;:&quot;7&quot;,bbox:&quot;-92.0373 -310.134 632 184.967&quot;,&quot;underline-thickness&quot;:&quot;3.51562&quot;,&quot;underline-position&quot;:&quot;-21.6211&quot;,&quot;unicode-range&quot;:&quot;U+0009-U+F002&quot;},glyphs:{&quot; &quot;:{w:179},&quot;	&quot;:{w:179},&quot;!&quot;:{d:&quot;66,-306v9,3,18,11,19,24v-18,73,-20,111,-37,194v0,10,2,34,-12,34v-12,0,-18,-9,-18,-28v0,-85,23,-136,38,-214v1,-7,4,-10,10,-10xm25,-30v15,-1,28,34,5,35v-11,-1,-38,-36,-5,-35&quot;,w:115},&#39;&quot;&#39;:{d:&quot;91,-214v-32,3,-25,-40,-20,-68v3,-16,7,-25,12,-27v35,13,14,56,8,95xm8,-231v4,-31,1,-40,18,-75v37,7,11,51,11,79v-3,3,-4,8,-5,13v-17,4,-16,-10,-24,-17&quot;,w:117},&quot;#&quot;:{d:&quot;271,-64v-30,26,-96,-7,-102,51v-6,2,-13,2,-24,-2v-2,-11,10,-21,2,-28v-14,5,-48,0,-48,22v0,23,-11,14,-29,10v-7,-6,6,-19,-1,-24r-32,4v-19,-8,-15,-24,5,-28r33,-6v4,0,24,-23,11,-27v-26,0,-63,14,-74,-10v3,-1,9,-17,16,-10v15,-8,81,4,89,-30v8,-14,16,-34,24,-38v23,9,24,38,5,49v37,24,55,-38,72,-43v19,10,20,23,-1,45v2,8,23,1,29,4v3,3,6,6,10,11v-14,13,-20,12,-45,12v-17,0,-16,17,-19,29v18,-7,49,3,67,-2v4,0,8,4,12,11xm161,-104v-30,-1,-44,10,-44,37v14,1,24,0,40,-5v0,-1,3,-10,8,-26v0,-4,-1,-6,-4,-6&quot;,w:285},$:{d:&quot;164,-257v29,4,1,42,-3,50v5,5,38,13,41,24v8,4,6,15,-2,21v-18,3,-36,-17,-49,-17v-17,1,-31,40,-28,48v5,4,8,8,9,10v13,1,35,37,28,44v-10,21,-36,20,-65,28v-10,10,-12,40,-17,51v-9,-3,-28,1,-18,-17v0,-13,5,-24,-1,-35v-18,1,-59,-10,-42,-29v21,0,56,16,55,-16v5,-4,9,-18,9,-26v-14,-15,-55,-41,-53,-65v2,-33,56,-19,98,-26v10,-14,31,-43,38,-45xm93,-152v11,-10,15,-15,14,-29v-17,-3,-37,1,-43,6v10,12,20,19,29,23xm111,-103v-8,1,-11,12,-10,22v10,0,28,2,27,-8v0,-4,-13,-15,-17,-14&quot;,w:225},&quot;%&quot;:{d:&quot;181,-96v24,-7,67,-13,104,1v14,18,21,19,22,44v-13,43,-99,61,-146,36v-9,-9,-22,-11,-32,-29v0,-27,24,-53,52,-52xm139,-185v-9,68,-138,73,-131,-5v0,-3,3,-9,9,-17v13,1,27,1,17,-16v5,-39,63,0,93,-6v36,1,80,-9,102,11v15,32,12,32,-8,56v-16,21,-103,78,-152,125r-14,28v-23,11,-25,-7,-29,-20v34,-71,133,-98,171,-162v-13,-12,-52,-5,-61,1v0,1,1,3,3,5xm38,-190v0,34,55,29,70,8v0,-14,-20,-11,-32,-14v-14,-3,-24,-9,-40,-10v1,0,5,11,2,16xm172,-53v12,27,90,18,102,-5v-18,-7,-32,-10,-40,-10v-29,3,-57,-4,-62,15&quot;,w:308},&quot;&amp;&quot;:{d:&quot;145,-82v17,-8,47,-15,71,-26v13,2,25,12,9,23v-23,7,-40,16,-53,27r0,6v13,8,30,21,36,38v0,8,-4,12,-11,12v-19,0,-43,-39,-59,-44v-30,12,-65,29,-97,32v-32,3,-45,-41,-23,-63v21,-20,52,-26,70,-48v-4,-31,-12,-47,9,-73v13,-16,20,-29,23,-39v15,-15,32,-22,51,-22v30,9,62,64,32,96v-2,3,-47,42,-69,48v-15,8,-11,9,0,22v6,7,10,11,11,11xm114,-138v25,-13,62,-38,74,-62v0,-9,-10,-31,-20,-29v-28,7,-60,42,-60,75v0,10,2,15,6,16xm99,-91v-18,10,-54,18,-59,45v26,5,61,-12,77,-22v-1,-5,-13,-23,-18,-23&quot;,w:253},&quot;&#39;&quot;:{d:&quot;36,-182v-36,7,-34,-61,-17,-80v15,1,21,19,21,20r-1,-1v0,0,-1,12,-5,35v1,5,3,17,2,26&quot;,w:63},&quot;(&quot;:{d:&quot;130,-306v13,2,23,43,-1,43v-49,43,-77,77,-90,148v5,49,27,67,64,101v4,14,5,6,2,19r-15,0v-35,-17,-79,-58,-79,-120v0,-58,66,-176,119,-191&quot;,w:120},&quot;)&quot;:{d:&quot;108,-138v-2,73,-48,120,-98,153v-17,-5,-16,-20,-6,-31v52,-64,73,-62,74,-135v1,-42,-40,-98,-58,-128v0,-5,-1,-12,-2,-22v18,-18,25,0,42,27v25,39,50,66,48,136&quot;,w:120},&quot;*&quot;:{d:&quot;121,-271v15,-5,36,-8,40,9v-5,10,-31,19,-47,31v0,11,34,43,14,53v-18,8,-24,-24,-34,-20v-4,10,-4,19,-12,41v-25,7,-15,-30,-17,-47v-13,-1,-17,9,-46,30r-10,0v-20,-32,37,-43,54,-64v-10,-11,-36,-33,-16,-51v3,0,14,8,33,24v8,-10,26,-39,32,-42v14,7,15,23,9,36&quot;,w:177},&quot;+&quot;:{d:&quot;163,-64v-7,22,-65,2,-77,21v-2,10,-6,21,-11,35v-20,4,-21,-12,-19,-29v3,-23,-44,6,-39,-27v-8,-22,36,-8,49,-18v8,-13,6,-36,24,-40v19,-4,14,32,11,39v18,3,19,2,54,8v2,1,5,5,8,11&quot;,w:170},&quot;,&quot;:{d:&quot;25,63v-26,21,-48,-2,-22,-24v14,-12,35,-40,35,-69v3,-2,3,-11,12,-9v35,17,5,88,-25,102&quot;,w:97},&quot;-&quot;:{d:&quot;57,-94v19,4,55,-5,54,17v-15,23,-54,20,-91,15v-4,2,-13,-10,-11,-16v-1,-22,28,-15,48,-16&quot;,w:124},&quot;.&quot;:{d:&quot;40,-48v21,20,21,44,-4,44v-33,0,-26,-24,-10,-44r14,0&quot;,w:67},&quot;/&quot;:{d:&quot;21,20v-22,-45,21,-95,41,-126v38,-57,115,-158,193,-201v2,0,4,3,7,11v11,29,-15,34,-25,55v-81,56,-189,208,-197,261r-19,0&quot;,w:275},0:{d:&quot;78,-237v70,-47,269,-41,270,59v0,34,-11,53,-29,76v-13,35,-30,32,-85,64v-6,2,-10,6,-7,8v-73,14,-98,38,-173,1v-7,-13,-52,-48,-46,-88v9,-57,27,-75,70,-120xm123,-38v100,0,202,-46,195,-153v-32,-55,-144,-73,-211,-35v-16,34,-68,54,-53,108v6,25,1,22,-3,39v6,24,41,41,72,41&quot;,w:353},1:{d:&quot;39,-208v0,-14,6,-59,29,-39v3,4,6,13,10,24r-22,128r8,87v-4,6,-9,3,-16,2v-44,-38,-9,-137,-9,-202&quot;,w:93},2:{d:&quot;88,-35v47,-10,119,-24,168,-9v0,12,-23,13,-35,16v1,1,3,1,5,1v-74,8,-118,23,-194,23v-14,0,-20,-13,-21,-28v55,-40,83,-61,123,-104v26,-13,65,-67,71,-102v-1,-9,-11,-16,-22,-16v-20,-1,-120,29,-156,49v-10,-2,-30,-20,-10,-28v50,-21,111,-51,178,-48v25,10,44,22,36,39v12,30,-19,64,-34,83v-39,48,-37,39,-115,109v0,5,-3,8,-8,11v4,3,8,4,14,4&quot;,w:265},3:{d:&quot;188,-282v34,-10,74,25,47,51v-19,32,-55,50,-92,70v28,14,116,25,108,70v8,14,-49,40,-63,48v-29,9,-130,22,-168,42v-6,-5,-19,-7,-12,-22v56,-36,175,-21,210,-76v-9,-20,-88,-42,-97,-33v-20,-1,-41,2,-56,-7r5,-21v56,-25,103,-36,137,-78v1,-1,2,-5,4,-11v-15,-14,-56,7,-79,0v-10,9,-73,22,-92,31v-11,-4,-28,-23,-13,-30v50,-22,96,-26,154,-37v0,-1,8,3,7,3&quot;,w:260},4:{d:&quot;79,-249v-7,17,-29,75,-33,96v0,6,3,8,8,8v43,-2,111,6,141,-6v17,-47,20,-100,63,-148v9,4,16,7,21,10v-17,31,-44,95,-51,141v7,4,24,-4,23,10v-1,16,-29,12,-31,23v-10,22,-9,69,-7,103v-3,2,-7,5,-10,9v-47,-11,-23,-74,-16,-114v0,-4,-2,-6,-7,-6v-65,2,-89,13,-162,4v-22,-22,-2,-53,5,-76v16,-15,17,-57,35,-70v6,-1,21,11,21,16&quot;,w:267},5:{d:&quot;185,-272v30,7,45,-8,53,18v1,16,-17,18,-34,14v0,0,-95,-11,-129,1v-6,9,-24,33,-29,54v76,10,171,5,214,47v11,11,22,30,5,52v-14,12,-30,14,-34,27v-26,11,-141,63,-157,60v-16,-2,-25,-19,-4,-27v48,-18,128,-39,170,-86v4,-14,-65,-41,-85,-41r-92,0v-10,-4,-66,-1,-57,-23v0,-23,23,-51,35,-83v11,-28,133,-10,144,-13&quot;,w:284},6:{d:&quot;70,-64v9,-51,63,-74,123,-71v43,2,109,3,111,41r-25,47v0,1,1,2,2,3v-5,0,-39,10,-41,20v-15,3,-22,4,-22,11v-39,1,-77,20,-119,13v-42,-7,-35,-9,-77,-46v-56,-118,94,-201,176,-229v7,0,21,8,20,15v-2,17,-23,15,-43,24v-69,31,-119,72,-134,145v-5,25,36,68,78,64v59,-6,128,-18,153,-61v-7,-14,-13,-9,-32,-21v-67,-15,-118,-5,-150,43r0,12v-13,4,-17,-3,-20,-10&quot;,w:310},7:{d:&quot;37,-228v33,-14,173,-17,181,-19v28,-1,24,31,9,45v-17,15,-45,49,-59,69v-17,26,-55,67,-61,113v-10,13,-9,14,-14,20v-33,-13,-20,-25,-11,-53v16,-48,73,-115,109,-156v2,-7,5,-14,-10,-12v-26,4,-54,6,-76,13v-23,-5,-83,31,-94,-9v2,-8,18,-19,26,-11&quot;,w:245},8:{d:&quot;57,-236v40,-50,166,-51,213,-10v22,28,10,63,-22,78r-35,17v8,5,54,24,53,44v-5,14,-4,33,-18,42v-13,13,-35,18,-44,34v-60,27,-190,49,-194,-42v7,-41,17,-54,59,-70r0,-4v-32,-9,-73,-62,-26,-85v4,0,8,-2,14,-4xm142,-160v24,-2,160,-31,99,-72v-28,-18,-108,-33,-146,-5v-16,12,-28,30,-33,59v24,12,37,20,80,18xm41,-62v30,65,189,6,199,-37v3,-14,-60,-30,-74,-30v-70,0,-118,10,-125,67&quot;,w:290},9:{d:&quot;11,-192v15,-49,119,-61,161,-23v16,15,27,55,11,79v-20,62,-51,79,-96,118v-10,4,-45,27,-50,6v9,-15,66,-52,98,-99v-7,-7,-8,-3,-25,0v-49,-11,-96,-25,-99,-81xm145,-131v7,-5,13,-34,13,-41v-2,-51,-104,-38,-114,-6v-2,10,37,35,46,35v23,1,43,-1,55,12&quot;,w:198},&quot;:&quot;:{d:&quot;39,-125v15,-8,40,-1,40,15v0,15,-6,22,-19,22v-13,0,-29,-21,-21,-37xm66,-17v-8,27,-51,19,-46,-8v-1,-6,8,-22,14,-20v29,0,30,6,32,28&quot;,w:95},&quot;;&quot;:{d:&quot;56,-93v2,-30,37,-22,40,2v0,2,-1,7,-3,15v-13,8,-15,6,-27,4xm64,-44v11,-11,30,-4,32,14v-21,39,-63,71,-92,85v-5,0,-11,-2,-18,-8v11,-23,36,-36,50,-61v11,-7,19,-20,28,-30&quot;,w:107},&quot;&lt;&quot;:{d:&quot;166,-202v12,0,29,15,24,29v0,4,-119,64,-120,73v15,21,89,64,91,86v2,29,-18,12,-30,15v-27,-29,-59,-54,-95,-75v-18,-10,-25,-13,-24,-41&quot;,w:176},&quot;=&quot;:{d:&quot;125,-121v18,7,55,-9,69,14v0,17,-45,26,-135,26v-18,0,-27,-7,-27,-21v-1,-37,60,-5,93,-19xm138,-71v20,0,48,-1,50,16v-13,24,-86,32,-131,29v-29,-2,-43,-10,-43,-24v-7,-23,36,-14,39,-17v27,6,57,-4,85,-4&quot;,w:196},&quot;&gt;&quot;:{d:&quot;4,-14v20,-48,77,-59,118,-94v-16,-19,-58,-52,-81,-75v-11,-7,-15,-38,-1,-40v33,16,83,71,121,105v26,23,-6,35,-41,53v-29,16,-56,28,-73,54v-21,15,-16,20,-34,15v-3,0,-9,-16,-9,-18&quot;,w:174},&quot;?&quot;:{d:&quot;105,-291v57,-13,107,-4,107,39v0,67,-136,85,-155,137v-1,6,10,23,-4,23v-23,1,-33,-35,-23,-57v31,-41,124,-60,149,-103v-8,-21,-72,-5,-88,-1v-23,6,-59,39,-71,8v0,0,-1,0,1,-17v10,-4,45,-20,84,-29xm80,-25v-6,4,-8,39,-24,22v-24,3,-22,-21,-13,-35v17,-7,29,5,37,13&quot;,w:216},&quot;@&quot;:{d:&quot;218,-207v23,8,42,14,47,37v44,68,-27,137,-87,85r1,0v0,2,-59,19,-61,17v-35,0,-42,-47,-17,-68r0,-4v-19,-1,-45,37,-49,40v-37,76,58,72,121,62v11,-2,34,-13,36,3v-14,31,-69,31,-114,33v-51,2,-99,-41,-80,-92v2,-30,22,-40,42,-63v35,-20,91,-53,161,-50xm217,-101v23,0,35,-19,35,-41v0,-43,-75,-41,-102,-19v36,3,55,16,62,41v-6,5,-6,19,5,19xm127,-110v8,5,51,-15,28,-16v-4,0,-25,4,-28,16&quot;,w:291},A:{d:&quot;97,-81v-23,-10,-39,38,-52,60v-8,6,-8,6,-22,18v-22,-7,-23,-37,-4,-49v7,-8,11,-15,15,-23r-1,1v-14,-26,23,-29,31,-40v1,-1,15,-29,26,-36v17,-31,39,-58,54,-92v16,-20,20,-51,41,-66v29,5,34,62,45,92v9,64,21,103,49,155v-3,25,-44,11,-54,0v-34,-12,-97,-29,-128,-20xm107,-118v20,6,80,10,111,17v6,-7,-4,-15,-7,-24v-11,-28,-9,-92,-30,-117v-9,9,-19,44,-34,55v-9,23,-27,40,-40,69&quot;,w:294},B:{d:&quot;256,-179v41,10,115,34,91,91v-6,3,-14,12,-19,20v-37,19,-50,34,-63,25v-9,10,-12,11,-34,13r3,-3v-4,-4,-12,-4,-18,0v0,0,2,2,5,4v-21,14,-26,6,-44,15v-4,0,-7,-2,-8,-5v-6,11,-20,-5,-18,11v-36,4,-91,35,-114,4v-7,-62,-10,-138,4,-199v-1,-19,-37,2,-37,-27v0,-8,2,-13,6,-15v68,-31,231,-92,311,-39v8,12,12,20,12,25v-8,42,-32,49,-77,80xm79,-160v72,-17,135,-39,184,-70v20,-13,31,-23,31,-27v1,-6,-30,-13,-38,-12v-54,0,-116,13,-186,41v11,21,1,48,9,68xm262,-43v0,-4,3,-6,-4,-5v0,1,1,2,4,5xm211,-140v-34,7,-94,24,-139,15v-6,20,-4,56,-4,82v0,29,43,1,56,2v48,-11,108,-25,154,-48v20,-10,32,-17,32,-25v0,-18,-33,-26,-99,-26xm195,-20v6,1,6,-2,5,-7v-3,2,-7,2,-5,7&quot;,w:364},C:{d:&quot;51,-114v-12,75,96,76,166,71r145,-10v9,2,9,5,9,18v-37,18,-85,28,-109,22v-18,10,-47,10,-71,10v-29,0,-68,1,-105,-11v-6,-1,-10,-3,-10,-8v-33,-13,-48,-33,-66,-59v-19,-114,146,-150,224,-177v35,0,88,-31,99,7v-1,29,-49,14,-76,28v-55,8,-115,35,-175,71v-13,8,-23,21,-31,38&quot;,w:376},D:{d:&quot;312,-78v-2,1,-3,7,-10,5v6,-3,10,-4,10,-5xm4,-252v2,-27,83,-38,106,-39v130,-7,267,1,291,109v0,0,-2,8,-3,25v-5,9,-4,28,-23,34v-4,4,-2,5,-7,0v-3,3,-15,7,-5,10v0,0,-10,14,-13,2v-11,1,-8,5,-20,14v1,2,7,3,9,1v-4,13,-22,13,-11,4v0,-3,1,-6,-3,-5v-40,29,-103,38,-141,65v10,6,22,-7,34,-3v-41,20,-127,44,-171,46v-21,1,-47,-33,-11,-39v15,-2,43,-6,56,-11v-16,-101,-5,-130,9,-207v2,0,4,-1,6,-3v-16,-17,-91,38,-103,-3xm297,-69v-7,3,-17,8,-25,7v1,1,3,2,5,2v-4,2,-11,5,-23,9v4,-11,30,-21,43,-18xm240,-51v10,0,12,2,0,6r0,-6xm220,-36v-1,-3,4,-6,6,-3v0,1,-2,1,-6,3xm125,-48v16,6,137,-46,155,-53v29,-18,101,-44,82,-93v-21,-53,-84,-61,-168,-67v-20,7,-50,3,-77,8v33,54,-12,132,8,205xm159,-22v-4,-1,-15,-5,-15,2v7,-1,12,-2,15,-2&quot;,w:381},E:{d:&quot;45,-219v-19,-36,34,-41,63,-36v44,-10,133,-8,194,-15v3,2,38,11,52,15v-73,19,-171,21,-246,38v-9,11,-16,32,-20,61v35,11,133,-6,183,3v1,6,2,7,3,14v-46,24,-118,16,-193,27v-15,13,-22,52,-22,66v60,1,121,-20,188,-20v22,10,53,-7,74,5v16,29,-23,26,-43,32v-73,4,-139,13,-216,27r-52,-10v-4,-22,23,-69,26,-98v-3,0,-10,-15,-12,-24v20,-12,34,-23,35,-67v2,-1,5,-5,5,-7v0,-4,-14,-11,-19,-11&quot;,w:353},F:{d:&quot;270,-258v13,2,59,6,48,34v-78,-3,-143,1,-212,22v-10,16,-21,43,-24,69r145,-9v8,3,29,-3,16,21v-14,-1,-59,13,-60,7v-12,13,-67,18,-108,21v-2,1,-4,3,-7,6v-2,23,-8,43,-7,69v1,28,-30,11,-40,5r10,-80r-26,-14v5,-10,10,-33,28,-25v21,-3,15,-46,26,-59v-1,-3,-32,-13,-28,-24v2,-22,45,-16,59,-30v47,4,99,-14,151,-9v5,-3,25,-3,29,-4&quot;,w:236},G:{d:&quot;311,-168v53,0,94,57,74,110v-31,37,-71,34,-136,52v-13,-7,-41,10,-57,7v-73,-1,-122,-17,-162,-59v-49,-51,-24,-80,5,-130v35,-61,138,-93,214,-106v16,4,42,-1,40,21v-5,40,-39,2,-73,21v-76,19,-162,65,-177,142v28,103,237,76,312,29v2,-3,3,-7,3,-13v-10,-35,-37,-43,-87,-45v-16,-13,-53,-9,-78,1v-4,-3,-5,-7,-5,-11v17,-29,73,-17,108,-24v12,4,18,5,19,5&quot;,w:391},H:{d:&quot;300,-268v18,12,19,32,4,51v-35,44,-34,140,-46,217v-1,5,-5,13,-11,12v-6,1,-19,-14,-18,-27r7,-106v-28,7,-76,22,-116,14v-18,2,-36,6,-55,3v-43,-8,-14,53,-33,75v-29,1,-26,-67,-21,-97v5,-31,28,-73,43,-98v2,2,7,3,14,3v13,33,-11,48,-13,78v61,4,118,2,176,2v8,0,13,-6,15,-20v4,-47,21,-87,54,-107&quot;,w:288},I:{d:&quot;63,-266v34,10,-4,105,-8,128r-24,126v-2,2,-3,1,-9,6v-12,-10,-12,-15,-12,-47v0,-93,9,-156,28,-188v10,-17,19,-25,25,-25&quot;,w:79},J:{d:&quot;235,-291v26,11,31,104,31,142v0,37,-2,95,-32,126v-33,34,-121,26,-167,1v-18,-11,-54,-29,-59,-59v0,-3,5,-15,16,-14v31,36,90,57,162,51v63,-30,56,-148,32,-226v-1,-16,11,-13,17,-21&quot;,w:282},K:{d:&quot;212,-219v17,-5,80,-60,80,-19v0,9,-2,14,-5,16r-132,78v-34,23,-54,32,-21,50v39,21,74,23,124,41v5,2,7,5,7,9v-4,24,-55,15,-79,8v-67,-19,-98,-36,-116,-83v9,-24,38,-35,66,-61v7,-4,49,-30,76,-39xm47,-194v11,-20,11,-45,31,-55v2,2,4,3,6,0v29,39,-21,96,-18,128v-17,24,-15,62,-29,113v-4,3,-10,7,-19,11v-12,-13,-10,-28,-8,-53v3,-31,17,-79,37,-144&quot;,w:270},L:{d:&quot;84,-43v58,0,179,-27,242,-4v3,17,-29,24,-40,26v-85,-4,-202,46,-268,3v-24,-16,-2,-33,-4,-57v26,-76,38,-108,86,-191v14,-7,26,-50,45,-32v6,22,5,31,-12,46v-20,39,-50,82,-67,142v-7,6,-19,46,-19,54v0,9,12,13,37,13&quot;,w:331},M:{d:&quot;174,-236v-1,52,-11,92,-7,143v10,5,15,-12,22,-18v42,-55,90,-130,136,-174r15,-18v42,2,32,53,11,80v-12,58,-54,143,-34,210v0,3,-3,12,-9,10v-31,-5,-32,-57,-27,-92v4,-27,12,-58,25,-93v-5,-10,5,-19,6,-30v-46,44,-66,110,-129,172v-11,10,-18,15,-22,15v-34,6,-28,-103,-28,-152v-28,22,-65,119,-96,170v-9,15,-34,3,-31,-19v30,-64,91,-177,139,-229v12,-1,29,13,29,25&quot;,w:343},N:{d:&quot;248,-20v-3,17,-37,18,-43,3v-24,-35,-53,-145,-80,-203v-32,40,-55,120,-92,174v-13,3,-26,-13,-27,-22r87,-171v4,-13,20,-57,42,-32v42,48,46,139,82,198v29,-45,46,-88,65,-153v12,-19,23,-42,38,-60v27,-1,14,18,4,44v-6,46,-32,68,-37,121v-15,29,-33,69,-39,101&quot;,w:307},O:{d:&quot;240,-268v85,1,163,29,150,125v13,7,-12,18,-5,26v-23,63,-133,112,-228,124v-80,-16,-171,-56,-148,-153v11,-47,20,-43,53,-83v17,-9,39,-22,73,-29v45,-10,81,-10,105,-10xm363,-156v16,-51,-62,-85,-111,-79v-25,-11,-50,8,-81,0v-15,10,-70,16,-85,31v6,20,-27,24,-39,45v-42,75,40,128,115,128v56,0,209,-71,201,-125&quot;,w:383},P:{d:&quot;70,-225v-7,-12,-36,16,-49,19v-4,0,-9,-5,-14,-17v21,-47,114,-55,172,-59v41,-3,132,33,99,87v-21,34,-72,59,-144,80v-2,16,-79,3,-74,46v3,25,-5,47,-10,68v-22,-1,-23,-29,-22,-56v2,-25,-20,-32,-8,-50v21,-5,10,-35,25,-57v6,-28,14,-48,25,-61xm71,-229v47,14,-2,50,-1,99v41,-3,113,-37,173,-76v5,-9,8,-14,8,-15v-28,-47,-125,-29,-180,-8&quot;,w:252},Q:{d:&quot;374,-217v20,59,-11,127,-48,156r30,38v-1,6,-8,16,-14,9v-3,0,-19,-9,-47,-26v-72,35,-173,75,-236,12v-70,-40,-67,-213,26,-217r8,5v24,-20,72,-48,112,-38v21,-4,22,-1,50,-2v66,-2,94,20,119,63xm296,-88v13,5,61,-49,63,-84v4,-62,-54,-78,-119,-76v-14,-6,-49,5,-71,3v-42,16,-89,41,-93,94v-9,11,1,25,-7,38v-12,-19,-7,-67,-1,-88v-56,30,-37,137,19,155v27,17,92,19,119,0v12,-2,29,-9,52,-20v2,-2,3,-3,3,-6v-11,-12,-46,-27,-54,-56v0,-13,3,-19,9,-19v18,1,60,52,80,59&quot;,w:379},R:{d:&quot;100,-275v96,-23,196,-10,208,78v-3,18,-17,52,-49,62v-14,20,-54,23,-79,40v-2,0,-14,2,-36,6v-40,8,-30,14,-3,33v37,27,52,30,118,55v16,6,31,23,12,27v-58,-2,-104,-29,-143,-61v-14,-3,-16,-15,-39,-27v-23,-19,-28,-12,-15,-38v63,-19,111,-15,163,-53v27,-20,43,-36,43,-49v0,-64,-120,-62,-173,-38v-9,4,-38,9,-40,18v-10,32,-16,70,-13,116v-10,21,-8,47,-6,75v2,31,-9,29,-27,22v-9,-55,5,-140,15,-190v-8,-6,-24,10,-24,-11v0,-34,16,-34,42,-55v2,-1,17,-4,46,-10&quot;,w:297},S:{d:&quot;13,-3v-7,-3,-22,-18,-5,-22v68,-15,119,-32,154,-45v51,-19,39,-34,3,-53v-46,-25,-82,-30,-121,-64v-33,-29,-50,-35,-25,-58v37,-20,119,-29,181,-29v29,0,44,6,44,18v-9,26,-62,6,-104,14v-17,2,-72,6,-92,16v37,53,132,58,180,111v8,9,11,20,11,30v-4,17,-23,35,-42,34v-21,16,-17,1,-49,17v-14,7,-41,9,-56,20v-25,-3,-49,10,-79,11&quot;,w:234},T:{d:&quot;141,-3v-36,-6,1,-49,-3,-79v10,-19,6,-35,15,-64r26,-85v-51,-9,-100,10,-141,14v-16,2,-30,-26,-11,-32v26,-8,143,-8,179,-19r12,6v67,-2,142,-1,200,-1v8,0,14,3,19,10v-18,16,-74,3,-103,14v-48,-4,-60,4,-113,7v-42,22,-36,130,-58,187v1,12,-9,44,-22,42&quot;,w:277},U:{d:&quot;365,-262v13,56,-22,104,-36,141v-19,22,-30,38,-57,56v-4,18,-60,35,-78,50v-53,28,-142,0,-161,-34v-31,-56,-37,-108,-11,-164v17,-33,29,-50,48,-29v-2,2,-3,7,-4,13v-44,36,-38,149,7,174v30,26,55,19,102,4v56,-17,66,-34,120,-76v12,-24,56,-68,46,-122r0,-16v0,1,-1,3,-1,6v4,-13,11,-10,25,-3&quot;,w:368},V:{d:&quot;246,-258v21,-22,31,-26,44,-8v1,1,-12,22,-28,35v-15,25,-41,38,-56,69v-13,15,-20,31,-28,57v-15,13,-11,29,-27,72v3,21,-5,24,-27,27v-33,-45,-54,-118,-84,-167v-5,-26,-18,-50,-25,-76v-3,-12,24,-8,29,-5v8,13,18,52,26,70r52,115v9,-2,4,-9,10,-21r25,-47v25,-44,46,-76,89,-121&quot;,w:234},W:{d:&quot;31,-213v16,46,17,106,41,151v31,-35,49,-89,76,-127v30,-15,39,27,52,56v10,22,21,48,35,67v2,0,4,-1,5,-3v16,-28,50,-76,79,-121v14,-21,40,-63,64,-83r5,8v-30,58,-76,110,-97,173v-18,28,-25,37,-33,63v-11,1,-16,25,-30,15v-21,-31,-44,-89,-62,-131v0,-2,-1,-3,-5,-5v-17,11,-16,36,-31,50v-20,33,-20,84,-68,94v-24,-19,-23,-81,-39,-111v-1,-15,-29,-94,-10,-108v9,2,12,5,18,12&quot;,w:331},X:{d:&quot;143,-183v43,-25,69,-36,126,-62v22,-10,86,-10,56,21v-51,3,-158,61,-154,64v10,15,41,30,50,52v27,17,46,60,70,82v9,14,-6,30,-24,20v-35,-43,-75,-100,-116,-132v-48,13,-100,47,-118,94v-1,49,-26,34,-27,4v-1,-26,13,-27,17,-48v22,-27,68,-55,90,-77v-9,-12,-60,-39,-79,-57v-6,-10,-6,-25,12,-25&quot;,w:312},Y:{d:&quot;216,-240v19,-14,42,10,22,26v-54,66,-121,109,-156,197v-8,21,-11,15,-30,4v3,-37,27,-61,33,-76v12,-12,15,-19,32,-42v-8,-6,-40,5,-45,5v-48,-6,-69,-65,-56,-113v14,0,13,-1,24,7v2,33,12,75,42,73v36,-2,102,-57,134,-81&quot;,w:189},Z:{d:&quot;60,-255v66,12,200,-34,240,21v-13,42,-63,62,-98,89v-19,15,-47,33,-82,55v-25,16,-47,32,-66,47v58,24,129,-6,208,-6v23,0,36,12,13,19v-33,2,-53,5,-86,10v-32,18,-88,15,-135,15v-9,-1,-55,-1,-48,-29v1,-24,30,-24,40,-41v64,-50,151,-86,208,-147v-38,-17,-155,12,-198,-4v0,0,-11,-33,4,-29&quot;,w:310},&quot;[&quot;:{d:&quot;72,-258r-15,250v30,4,55,-3,80,-6v7,-1,8,17,9,23v-28,15,-73,23,-121,21v-7,0,-10,-6,-10,-17v0,-60,25,-193,22,-288v0,-16,13,-20,33,-19v9,-3,34,-12,51,-12v16,0,15,16,19,29v-16,7,-48,10,-68,19&quot;,w:151},&quot;\\&quot;:{d:&quot;21,38v-20,-21,9,-72,13,-90v44,-78,113,-189,200,-253v2,0,5,4,7,12v11,31,-13,36,-24,58v-74,61,-174,219,-180,273r-16,0&quot;,w:257},&quot;]&quot;:{d:&quot;133,-258v-23,-13,-84,6,-85,-32v0,-10,5,-15,14,-15v0,0,30,2,90,7v10,1,15,13,15,36v2,7,-8,59,-13,112r-11,125v-9,48,9,90,-59,71v-20,-4,-39,-1,-59,-4v-5,-10,-25,-12,-14,-30v8,-3,61,-13,78,-8v14,1,8,-7,10,-17v15,-69,21,-166,34,-245&quot;,w:171},&quot;^&quot;:{d:&quot;68,-306v20,15,47,36,58,60v-1,4,0,7,-9,7v-26,0,-47,-38,-49,-32v-15,9,-41,50,-54,30v-2,-31,17,-23,33,-51v8,-9,15,-14,21,-14&quot;,w:135},_:{d:&quot;11,15v-8,33,18,45,50,34r205,2r197,-5v11,-5,14,-9,7,-28v-95,-21,-258,-10,-376,-10v-25,0,-72,-3,-83,7&quot;,w:485},&quot;`&quot;:{d:&quot;75,-264v16,8,56,14,39,43v-30,-8,-65,-23,-105,-44v-1,-3,-3,-28,5,-25v16,5,44,17,61,26&quot;,w:129},a:{d:&quot;124,-56v10,4,59,41,65,50v1,7,-6,17,-12,17r-60,-30v-22,2,-42,21,-65,19v-33,4,-68,-67,-15,-81v41,-27,96,-39,110,9v0,6,-4,12,-11,16v-33,-25,-67,-5,-88,12v10,16,61,-18,76,-12&quot;,w:196},b:{d:&quot;80,-140v69,1,123,0,134,52v5,26,-71,71,-97,70v-11,11,-88,22,-94,22v-11,-3,-26,-18,-6,-24v19,-5,-2,-19,-1,-35v1,-18,11,-36,-5,-47v-6,-17,-6,-21,14,-32v6,-45,18,-89,28,-124v2,-7,8,-12,17,-15v5,3,10,11,16,28v-12,27,-13,63,-23,96v0,6,6,9,17,9xm87,-107v-40,-9,-31,31,-39,54v8,15,0,25,12,22v30,-8,60,-18,88,-32v39,-18,49,-33,-1,-42v-20,-4,-45,-7,-60,-2&quot;,w:217},c:{d:&quot;128,-123v29,-7,37,29,12,33v-27,-4,-40,6,-79,25v-8,4,-13,11,-16,22v30,32,91,3,134,11v5,13,-8,26,-22,19v-51,25,-139,28,-150,-30v6,-50,69,-82,121,-80&quot;,w:194},d:{d:&quot;224,-201v0,-35,-17,-111,24,-94v7,86,-2,119,0,197v-4,2,-8,21,-18,16v-62,-7,-154,-8,-185,29v6,17,28,26,51,26v16,0,100,-15,132,-18v7,5,-6,20,-10,22v-24,8,-122,42,-163,25v-32,-5,-62,-53,-36,-80v35,-37,118,-46,198,-43v1,-22,7,-49,7,-80&quot;,w:265},e:{d:&quot;4,-57v0,-58,51,-71,110,-74v33,-1,45,16,59,35v1,14,2,39,-7,42v-24,-2,-73,13,-99,11v-2,2,-2,3,-2,3v0,3,12,8,37,15v21,0,69,9,31,22v-9,14,-34,6,-56,6v-27,-5,-73,-28,-73,-60xm123,-102v-22,2,-68,5,-65,26v24,-2,66,5,79,-6v-5,-13,-1,-13,-14,-20&quot;,w:182},f:{d:&quot;6,-59v6,-29,53,-4,53,-43v0,-64,29,-118,84,-150v45,-25,167,-24,155,51v-1,2,-7,6,0,6r-10,2v-45,-58,-165,-39,-186,39v-7,26,-11,42,-9,62v44,8,95,-21,135,-7v-12,25,-39,21,-76,30v-19,5,-18,7,-54,19v-2,8,15,32,17,35v-6,25,-26,26,-40,-5r-15,-24v-41,10,-44,12,-54,-15&quot;,w:234},g:{d:&quot;132,-97v30,27,21,75,30,117v-12,31,-11,66,-36,103v-32,46,-105,83,-167,39v-31,-21,-49,-29,-51,-75v-2,-37,77,-50,121,-57v37,-6,68,-10,95,-11v7,-6,3,-32,4,-46v0,0,-1,1,-1,2v0,-18,-5,-31,-14,-45v-44,5,-79,20,-94,-18v3,-54,73,-54,125,-50v12,7,12,13,4,25v-30,-11,-76,8,-90,20v23,3,50,-16,74,-4xm-34,121v60,53,168,1,159,-86v-47,-7,-93,24,-142,30v-12,7,-45,19,-42,29v0,10,8,19,25,27&quot;,w:188},h:{d:&quot;100,-310v11,-2,10,19,11,20v-11,52,-40,133,-53,189v-6,30,-9,37,-9,47v27,0,113,-34,143,-34v42,0,31,47,39,79v0,4,-5,17,-16,16v4,2,11,3,4,6v-24,-1,-28,-34,-25,-64v-1,-1,-2,-3,-5,-5v-51,0,-110,38,-162,51v-9,1,-15,-15,-16,-23v17,-89,39,-141,71,-264v0,-9,6,-19,18,-18&quot;,w:251},i:{d:&quot;62,-209v7,18,9,23,-5,38v-23,-6,-21,-18,-11,-36v2,0,8,-1,16,-2xm34,-7v-18,-21,-8,-73,-1,-106v7,-10,20,-8,23,6v-1,36,7,72,-2,104v-8,2,-8,0,-20,-4&quot;,w:80},j:{d:&quot;88,-191v5,28,-18,40,-28,21v0,-20,12,-29,28,-21xm82,-99v28,-1,16,35,16,61v0,60,-19,150,-35,202v-12,8,-19,31,-35,16v-32,-7,-43,-19,-56,-44r2,-17v11,4,49,45,61,18v10,-55,27,-107,30,-171v0,-16,0,-59,17,-65&quot;,w:120},k:{d:&quot;59,-66v33,26,114,37,155,62v8,-4,22,-2,19,-17v0,-4,-12,-11,-30,-24v-36,-25,-54,-22,-99,-33v14,-21,119,-13,103,-63r-16,-7r-123,47r25,-93v-3,-15,16,-49,18,-81v1,-15,-21,-14,-25,-3v-31,82,-49,168,-75,257v2,2,22,30,27,10v2,-5,4,-9,9,-11v4,-16,4,-15,12,-44&quot;,w:236},l:{d:&quot;66,-300v21,-6,37,23,30,55v-10,51,-28,135,-28,208v0,11,6,36,-13,37v-29,-5,-30,-48,-25,-83r28,-177v-6,-17,1,-29,8,-40&quot;,w:102},m:{d:&quot;348,-59v-2,21,0,57,3,73v-17,3,-30,-1,-32,-16v-8,-7,-5,-44,-13,-70v-35,3,-82,49,-111,70v-12,8,-40,4,-39,-15r2,-56v-1,-13,4,-28,-8,-29v-35,8,-79,72,-115,87v-6,2,-20,-18,-21,-22v1,-20,14,-105,39,-64r8,15v17,-14,72,-56,93,-54v27,3,49,40,43,80v24,-2,66,-55,124,-53v11,14,28,23,27,54&quot;,w:368},n:{d:&quot;121,-136v37,6,62,54,62,111v0,32,-16,25,-31,17v-18,-30,-5,-45,-22,-85v-37,-13,-71,55,-92,65v-20,-3,-39,-39,-21,-62v2,-12,3,-15,11,-30v12,-8,20,11,29,12&quot;,w:194},o:{d:&quot;108,-139v52,-24,104,18,104,63v0,59,-66,67,-114,83v-52,-2,-115,-50,-80,-105v23,-18,52,-35,90,-41xm45,-60v16,54,125,16,131,-23v-12,-59,-129,-8,-131,23&quot;,w:217},p:{d:&quot;82,14v-10,12,-8,117,-24,142v-15,2,-19,0,-29,-13v0,-76,9,-113,22,-192v14,-27,35,-6,37,13v0,8,-3,21,-7,38v2,2,3,2,4,2v26,-9,116,-33,126,-72v-7,-17,-24,-33,-49,-31v-40,3,-116,13,-116,47v-5,7,-2,17,-16,20v-17,-12,-18,-20,-12,-38v8,-25,74,-61,110,-59v55,-15,113,15,118,70v-15,52,-84,79,-146,83v-5,0,-11,-4,-18,-10&quot;,w:251},q:{d:&quot;144,-147v27,-8,89,-3,97,31v-9,29,-42,-4,-73,1v-32,6,-118,20,-111,49v0,7,13,13,21,13v21,0,78,-24,104,-34v2,0,9,8,22,21v1,1,1,2,1,5v-27,90,-22,70,-43,203v11,15,-15,54,-33,33v-6,-8,-10,-20,-3,-28v1,-72,5,-114,15,-172v-35,3,-35,10,-59,8v-41,-4,-98,-41,-56,-85v33,-34,59,-27,118,-45&quot;,w:248},r:{d:&quot;242,-117v2,22,5,10,-14,23v-73,-7,-166,-23,-174,56v-8,6,-3,20,-8,36v-29,10,-40,-9,-33,-46v6,-31,7,-69,32,-55v58,-37,66,-42,175,-19v3,5,15,4,22,5&quot;,w:229},s:{d:&quot;154,-151v19,1,27,24,13,32v-4,1,-22,4,-53,7v-16,8,-22,-2,-39,9v23,21,89,16,96,62v-13,24,-85,35,-124,42v-9,-3,-18,-3,-27,0v-6,-4,-21,-16,-8,-25v30,-6,83,-13,102,-24v-17,-16,-80,-33,-97,-48v-3,-2,-4,-7,-4,-15v-6,-6,3,-13,15,-18v22,-9,94,-23,126,-22&quot;,w:188},t:{d:&quot;85,-150v10,-41,35,-126,65,-134v4,1,24,19,11,36v-17,22,-29,57,-36,104v26,8,50,-7,73,5v14,0,22,3,22,9v-1,19,-44,18,-57,23v-10,1,-46,0,-54,10v-10,24,-4,67,-20,98v-21,-3,-26,1,-26,-20v0,-9,2,-36,8,-81v-15,-13,-81,9,-77,-27v4,-38,71,6,91,-23&quot;,w:194},u:{d:&quot;207,-136v-1,-2,11,-14,14,-13v6,0,10,7,10,22v-3,40,-23,56,-40,82v-13,19,-62,43,-93,43v-67,-2,-111,-75,-71,-133v26,-3,21,29,19,49v-1,27,26,44,57,42v41,-2,93,-55,104,-92&quot;,w:242},v:{d:&quot;24,-127r52,71v42,-16,70,-54,124,-65v5,4,8,7,8,11v-8,19,-4,8,-33,32v0,1,-1,3,-1,5v-61,45,-93,68,-97,68v-40,-15,-50,-72,-68,-100v6,-14,10,-22,15,-22&quot;,w:214},w:{d:&quot;15,-139v38,-2,27,57,45,86v30,2,67,-66,101,-78v26,6,36,69,60,78v47,-35,51,-54,119,-104v3,0,7,-2,15,-4v19,23,-9,28,-21,49v-33,28,-68,90,-107,109v-10,6,-52,-47,-72,-71v-20,17,-85,74,-97,73v-38,7,-41,-98,-52,-122v0,-1,3,-7,9,-16&quot;,w:325},x:{d:&quot;95,-124v22,-13,78,-32,99,-31v16,0,23,6,23,18v0,22,-17,11,-49,21v-3,0,-45,20,-42,24v0,1,2,4,8,10v20,24,49,41,44,80v-35,3,-27,-9,-60,-44v-40,-43,-37,-26,-79,9v-1,1,-2,3,-3,8v-12,8,-28,10,-27,-11v-6,-8,45,-65,48,-65v-17,-21,-61,-52,-24,-68v9,0,48,37,62,49&quot;,w:223},y:{d:&quot;44,-65v22,33,70,4,99,-8v5,-4,28,-15,41,-31r17,0v25,47,-26,70,-40,114v-5,4,-9,8,-10,21v-16,12,-11,33,-27,51v-5,18,-12,43,-23,71v-1,-1,-2,34,-18,29v-12,1,-22,-12,-22,-23v20,-70,24,-65,68,-177v-47,16,-111,8,-116,-39v-11,-13,-7,-62,8,-62v18,0,22,26,23,54&quot;,w:216},z:{d:&quot;189,-43v9,-1,46,-6,41,12v0,7,-5,13,-15,14v-45,6,-148,24,-181,13v0,-3,-5,-8,-14,-15v5,-44,66,-46,90,-85v-15,-18,-84,21,-84,-14v0,-10,5,-17,14,-18v33,-3,79,-13,109,-3v4,-2,14,11,12,15v0,23,-26,51,-78,84v28,10,73,-3,106,-3&quot;,w:244},&quot;{&quot;:{d:&quot;94,-303v27,-9,90,-14,79,26v-20,17,-55,-5,-87,13v-4,1,-6,4,-6,8v33,42,31,44,7,85v-6,10,-13,16,-13,13v5,6,17,17,15,31r-33,78v7,35,28,49,57,63r49,0v7,42,-51,41,-86,20v-43,-13,-51,-51,-56,-89v-2,-25,25,-54,27,-71v-3,-4,-46,-5,-41,-21v2,-10,-3,-29,11,-25v2,0,51,-17,52,-38v4,-3,-25,-23,-25,-49v0,-41,8,-30,50,-44&quot;,w:179},&quot;|&quot;:{d:&quot;30,-308v26,5,14,50,15,80v5,78,-8,153,-3,225v-2,15,-1,31,-11,36v-8,-3,-25,-22,-25,-32r9,-183v0,-40,0,-78,1,-112v0,-4,9,-15,14,-14&quot;,w:63},&quot;}&quot;:{d:&quot;47,-298v34,-17,118,-18,112,36v6,25,-76,98,-69,103v4,16,39,7,44,28v7,34,-34,17,-37,39v8,29,49,83,23,123v-15,23,-43,26,-73,46v-34,8,-43,11,-49,-17v1,-15,30,-15,33,-20v24,-12,70,-27,55,-61v-14,-33,-37,-68,-19,-103v-46,-50,46,-100,60,-141v-10,-16,-68,6,-77,-12&quot;,w:143},&quot;~&quot;:{d:&quot;7,-254v2,-6,59,-50,67,-46v11,-1,35,19,46,26v5,0,27,-10,66,-31v21,8,-1,25,-7,38v-27,21,-48,31,-65,31v-24,-11,-37,-39,-65,-9v-7,7,-26,36,-42,11v3,-5,-3,-17,0,-20&quot;,w:199},&quot;Ä&quot;:{d:&quot;161,-217v20,53,23,124,54,170v-2,20,-34,9,-42,0v-27,-12,-78,-18,-101,-18v-26,6,-29,51,-54,63v-18,-4,-19,-30,-3,-38v5,-9,15,-16,8,-29v1,-12,23,-9,26,-19v6,-10,11,-20,20,-27r70,-121v12,-4,16,4,22,19xm82,-91v17,3,62,7,86,13v-13,-33,-13,-80,-29,-109v-15,30,-38,63,-57,96xm187,-259v0,8,-4,13,-12,13v-18,0,-21,-20,-16,-34v18,-1,28,2,28,21xm90,-284v7,3,28,11,28,18v0,9,-9,18,-18,17v-17,0,-25,-24,-10,-35&quot;},&quot;Å&quot;:{d:&quot;161,-217v20,53,23,124,54,170v-2,20,-34,9,-42,0v-27,-12,-78,-18,-101,-18v-26,6,-29,51,-54,63v-18,-4,-19,-30,-3,-38v5,-9,15,-16,8,-29v1,-12,23,-9,26,-19v6,-10,11,-20,20,-27r70,-121v12,-4,16,4,22,19xm82,-91v17,3,62,7,86,13v-13,-33,-13,-80,-29,-109v-15,30,-38,63,-57,96xm112,-239v-31,-17,-9,-61,29,-56v12,2,22,3,33,12v24,39,-30,62,-62,44xm119,-262v2,14,41,8,41,-4v0,-4,-8,-6,-24,-9v-10,-2,-17,10,-17,13&quot;},&quot;Ç&quot;:{d:&quot;48,-108v-12,70,90,71,159,67r138,-9v9,-1,7,9,7,17v-37,16,-80,27,-103,21v-14,9,-40,3,-67,9v-30,0,-64,1,-100,-10v-6,-1,-10,-4,-10,-8v-32,-12,-46,-31,-63,-56v-16,-61,47,-103,83,-121v82,-42,118,-45,200,-60v21,-4,36,34,11,37v-90,11,-148,31,-225,77v-12,8,-23,20,-30,36xm172,18v29,4,47,14,53,35v-2,7,-14,31,-27,31v-28,7,-55,9,-84,14v-18,-5,-13,-32,7,-32v21,0,55,-5,69,-13v-16,-14,-63,10,-50,-35v9,-10,1,-27,23,-29v7,8,11,16,9,29&quot;,w:331},&quot;É&quot;:{d:&quot;49,-160v1,-4,-10,-9,-15,-8v-15,-35,32,-30,57,-31r142,-8v2,1,30,7,40,10v-52,16,-133,17,-190,30v-7,9,-12,24,-15,47v26,10,102,-6,141,3v1,3,1,6,2,10v-36,18,-92,12,-149,21v-11,9,-16,41,-16,51v55,-1,111,-21,168,-13v15,-8,48,1,31,18v-53,16,-130,13,-198,29r-39,-8v-4,-19,17,-53,20,-76v-1,0,-7,-11,-9,-18v18,-7,22,-28,30,-57xm133,-248v27,-11,48,-32,59,-14v3,11,-79,52,-88,53v-14,1,-16,-11,-12,-21v10,-4,23,-11,41,-18&quot;,w:252},&quot;Ñ&quot;:{d:&quot;224,-182v1,-17,15,-24,22,-38v20,0,13,10,3,33v-3,36,-25,52,-28,94v-10,24,-30,55,-29,82r-19,7v-32,-8,-36,-70,-58,-111v-2,-23,-7,-27,-19,-54v-28,36,-41,93,-71,133v-9,5,-20,-9,-20,-17r73,-149v9,-24,31,-5,36,7v19,41,31,98,53,139v22,-35,34,-69,50,-118v2,-3,3,-3,7,-8xm203,-257v22,-8,41,-24,65,-26v3,11,-8,9,-7,21v-26,20,-46,31,-59,31v-2,3,-49,-27,-49,-29v-11,0,-32,31,-46,32v-11,-2,-12,-21,-4,-23v4,-6,28,-30,48,-34v17,-4,43,28,52,28&quot;,w:219},&quot;Ö&quot;:{d:&quot;62,-184v78,-31,249,-50,238,74v-6,65,-102,105,-179,115v-77,-7,-152,-71,-101,-149v2,-5,24,-33,42,-40xm279,-120v14,-38,-47,-64,-85,-61v-20,-9,-41,7,-62,0v-11,7,-54,12,-66,24v0,20,-51,35,-38,66v-1,43,50,67,96,67v44,0,162,-55,155,-96xm197,-229v0,8,-4,13,-12,13v-17,0,-19,-19,-16,-34v18,-1,29,1,28,21xm101,-254v7,3,28,9,27,18v1,8,-8,17,-17,17v-18,0,-26,-24,-10,-35&quot;,w:273},&quot;Ü&quot;:{d:&quot;281,-202v6,67,-30,121,-71,152v-3,14,-47,26,-60,39v-41,20,-110,1,-125,-26v-24,-44,-28,-84,-8,-127v12,-26,23,-38,37,-22v-2,2,-3,5,-3,10v-34,26,-29,116,5,134v22,32,86,-1,109,-8v38,-28,104,-64,97,-149v2,-10,7,-8,19,-3xm197,-227v0,8,-4,13,-12,13v-18,0,-21,-20,-16,-34v18,-1,28,2,28,21xm101,-252v7,3,27,10,27,18v0,8,-9,18,-18,17v-18,-1,-24,-25,-9,-35&quot;,w:262},&quot;á&quot;:{d:&quot;118,-53v10,4,55,41,62,47v0,7,-5,16,-12,16r-57,-28v-20,3,-40,19,-61,18v-10,2,-43,-17,-42,-36v0,-14,7,-40,27,-41v39,-26,92,-36,104,9v0,6,-2,11,-9,15v-32,-24,-64,-6,-84,11v8,15,58,-17,72,-11xm32,-117v24,-3,85,-55,101,-32v3,11,-80,53,-89,53v-13,2,-14,-10,-12,-21&quot;,w:173},&quot;à&quot;:{d:&quot;118,-53v10,4,55,41,62,47v0,7,-5,16,-12,16r-57,-28v-20,3,-40,19,-61,18v-10,2,-43,-17,-42,-36v0,-14,7,-40,27,-41v39,-26,92,-36,104,9v0,6,-2,11,-9,15v-32,-24,-64,-6,-84,11v8,15,58,-17,72,-11xm99,-137v7,6,56,14,37,40v-28,-7,-62,-21,-100,-41v-2,-3,-2,-26,5,-23v16,4,42,17,58,24&quot;,w:173},&quot;â&quot;:{d:&quot;118,-53v10,4,55,41,62,47v0,7,-5,16,-12,16r-57,-28v-20,3,-40,19,-61,18v-10,2,-43,-17,-42,-36v0,-14,7,-40,27,-41v39,-26,92,-36,104,9v0,6,-2,11,-9,15v-32,-24,-64,-6,-84,11v8,15,58,-17,72,-11xm147,-97v-27,-6,-39,-26,-60,-37v-21,7,-38,46,-65,23v-2,-5,-3,-10,-4,-14v18,-4,43,-31,61,-42v28,5,40,21,62,36v12,8,18,17,18,25v0,6,-4,9,-12,9&quot;,w:173},&quot;ä&quot;:{d:&quot;118,-53v10,4,55,41,62,47v0,7,-5,16,-12,16r-57,-28v-20,3,-40,19,-61,18v-32,5,-66,-64,-15,-77v39,-26,92,-36,104,9v0,6,-3,11,-9,15v-32,-24,-64,-6,-84,11v8,15,58,-17,72,-11xm142,-119v0,8,-4,13,-12,13v-18,0,-21,-20,-16,-34v18,-1,28,2,28,21xm46,-144v7,3,28,9,27,18v1,8,-9,18,-18,17v-18,-1,-25,-25,-9,-35&quot;,w:173},&quot;ã&quot;:{d:&quot;118,-53v10,4,55,41,62,47v0,7,-5,16,-12,16r-57,-28v-20,3,-40,19,-61,18v-10,2,-43,-17,-42,-36v0,-14,7,-40,27,-41v39,-26,92,-36,104,9v0,6,-2,11,-9,15v-32,-24,-64,-6,-84,11v8,15,58,-17,72,-11xm114,-136v22,-8,41,-24,64,-26v3,11,-7,10,-7,21v-26,20,-45,30,-58,30v-3,3,-49,-26,-49,-28v-10,-1,-32,35,-51,31v-12,-32,8,-29,32,-51v24,-21,54,20,69,23&quot;,w:173},&quot;å&quot;:{d:&quot;118,-53v10,4,55,41,62,47v0,7,-5,16,-12,16r-57,-28v-20,3,-40,19,-61,18v-10,2,-43,-17,-42,-36v0,-14,7,-40,27,-41v39,-26,92,-36,104,9v0,6,-2,11,-9,15v-32,-24,-64,-6,-84,11v8,15,58,-17,72,-11xm54,-101v-37,-20,-9,-71,34,-65v13,1,25,3,38,13v27,45,-34,73,-72,52xm61,-128v4,20,48,7,49,-5v0,-5,-9,-7,-28,-10v-12,-2,-21,11,-21,15&quot;,w:173},&quot;ç&quot;:{d:&quot;108,-118v30,-6,56,21,25,33v-24,-6,-39,5,-75,23v-7,4,-12,12,-15,22v31,28,86,3,128,9v3,28,-29,16,-44,28v-53,15,-106,10,-120,-37v0,-48,62,-70,101,-78xm92,18v23,4,45,12,48,32v-2,6,-12,28,-25,28v-24,6,-50,10,-77,13v-16,-4,-11,-28,7,-29v17,-1,51,-4,63,-12v-14,-15,-57,10,-46,-32v9,-8,0,-25,21,-26v6,6,12,14,9,26&quot;,w:171},&quot;é&quot;:{d:&quot;108,-124v42,-3,70,39,50,73v-22,-1,-70,12,-94,10v-1,1,-2,3,-2,3v0,3,12,7,35,14v18,0,64,7,30,21v-10,14,-31,6,-53,6v-26,-7,-70,-26,-70,-58v0,-54,48,-65,104,-69xm130,-78v-2,-35,-66,-13,-77,3v16,6,62,6,77,-3xm76,-169v26,-11,48,-32,59,-14v3,10,-80,53,-89,53v-14,1,-14,-10,-12,-21v15,-7,16,-7,42,-18&quot;,w:161},&quot;è&quot;:{d:&quot;108,-124v42,-3,70,39,50,73v-22,-1,-70,12,-94,10v-1,1,-2,3,-2,3v0,3,12,7,35,14v18,0,64,7,30,21v-10,14,-31,6,-53,6v-26,-7,-70,-26,-70,-58v0,-54,48,-65,104,-69xm130,-78v-2,-35,-66,-13,-77,3v16,6,62,6,77,-3xm95,-166v7,6,54,14,37,40v-28,-7,-62,-21,-100,-41v-3,-3,-3,-26,5,-24v16,5,42,18,58,25&quot;,w:161},&quot;ê&quot;:{d:&quot;108,-124v42,-3,70,39,50,73v-22,-1,-70,12,-94,10v-1,1,-2,3,-2,3v0,3,12,7,35,14v18,0,64,7,30,21v-10,14,-31,6,-53,6v-26,-7,-70,-26,-70,-58v0,-54,48,-65,104,-69xm130,-78v-2,-35,-66,-13,-77,3v16,6,62,6,77,-3xm145,-129v-27,-6,-39,-26,-60,-37v-8,0,-10,4,-14,10v-11,15,-51,34,-56,0v17,-4,44,-32,61,-43v28,5,41,21,63,36v12,8,17,17,17,25v0,6,-3,9,-11,9&quot;,w:161},&quot;ë&quot;:{d:&quot;108,-124v42,-3,70,39,50,73v-22,-1,-70,12,-94,10r-3,3v0,3,12,7,36,14v18,0,64,7,30,21v-10,14,-31,6,-53,6v-26,-7,-67,-27,-71,-58v7,-52,48,-65,105,-69xm130,-78v-2,-35,-66,-13,-77,3v16,6,62,6,77,-3xm140,-144v0,8,-4,12,-12,12v-18,0,-19,-19,-16,-33v18,-1,29,1,28,21xm44,-169v7,3,28,9,28,17v0,9,-9,18,-18,18v-18,0,-25,-24,-10,-35&quot;,w:161},&quot;í&quot;:{d:&quot;59,-98v20,4,15,53,10,95v-6,1,-11,2,-19,-4v1,-7,-12,-18,-10,-24v4,-22,-4,-65,19,-67xm50,-139v27,-11,49,-32,59,-14v3,11,-80,53,-89,53v-14,1,-14,-12,-11,-22v15,-7,14,-6,41,-17&quot;,w:105},&quot;ì&quot;:{d:&quot;57,-98v22,5,13,50,11,95v-7,1,-11,2,-20,-4v1,-7,-12,-18,-10,-24v4,-22,-2,-64,19,-67xm70,-139v14,10,54,14,37,41v-28,-7,-61,-22,-99,-42v-3,-2,-3,-25,5,-23v15,5,41,17,57,24&quot;,w:109},&quot;î&quot;:{d:&quot;72,-98v20,5,12,51,10,95v-6,2,-13,1,-20,-4v1,-8,-12,-18,-10,-24v4,-22,-3,-65,20,-67xm134,-94v-26,-7,-39,-25,-60,-37v-7,0,-9,4,-13,10v-14,15,-51,34,-56,-1v18,-4,45,-33,61,-43v27,6,40,22,62,37v12,8,18,17,18,25v0,6,-4,9,-12,9&quot;,w:143},&quot;ï&quot;:{d:&quot;55,-97v19,5,15,53,10,95v-17,5,-26,-14,-30,-28v6,-20,-3,-65,20,-67xm110,-118v0,8,-4,13,-12,13v-17,0,-19,-19,-16,-34v18,-1,29,1,28,21xm14,-143v6,3,28,8,28,17v0,9,-9,18,-18,18v-18,0,-25,-24,-10,-35&quot;,w:107},&quot;ñ&quot;:{d:&quot;115,-129v34,6,59,50,59,105v0,31,-15,24,-30,17v-15,-29,-5,-42,-20,-81v-35,-13,-68,52,-88,61v-20,-4,-38,-36,-19,-59v0,-12,3,-14,10,-28v11,-8,18,11,27,12xm117,-166v22,-7,41,-23,64,-26v3,11,-7,10,-7,21v-26,20,-45,30,-58,30v-3,3,-49,-26,-49,-28v-10,-1,-32,35,-51,31v-5,-12,-8,-16,0,-23v4,-6,28,-29,48,-33v17,-3,43,28,53,28&quot;,w:171},&quot;ó&quot;:{d:&quot;102,-132v50,-20,99,16,99,60v0,54,-60,64,-108,79v-50,-2,-110,-48,-76,-100v22,-17,49,-33,85,-39xm136,-104v-34,0,-91,27,-94,47v16,51,125,16,125,-22v0,-17,-10,-25,-31,-25xm49,-154v24,-3,85,-55,101,-32v3,11,-80,53,-89,53v-14,0,-13,-8,-12,-21&quot;,w:191},&quot;ò&quot;:{d:&quot;102,-132v50,-20,99,16,99,60v0,54,-60,64,-108,79v-50,-2,-110,-48,-76,-100v22,-17,49,-33,85,-39xm136,-104v-34,0,-91,27,-94,47v16,51,125,16,125,-22v0,-17,-10,-25,-31,-25xm115,-181v14,10,51,13,37,40v-28,-7,-62,-21,-100,-41v-3,-2,-3,-26,5,-23v16,5,42,17,58,24&quot;,w:191},&quot;ô&quot;:{d:&quot;102,-132v50,-20,99,16,99,60v0,54,-60,64,-108,79v-50,-2,-110,-48,-76,-100v22,-17,49,-33,85,-39xm136,-104v-34,0,-91,27,-94,47v16,51,125,16,125,-22v0,-17,-10,-25,-31,-25xm110,-177v-22,6,-38,45,-65,22v-2,-4,-3,-9,-4,-13v18,-4,43,-32,61,-43v27,6,40,21,62,36v12,9,18,17,18,25v1,11,-15,10,-23,7&quot;,w:191},&quot;ö&quot;:{d:&quot;102,-132v50,-20,99,16,99,60v0,54,-60,64,-108,79v-50,-2,-110,-48,-76,-100v22,-17,49,-33,85,-39xm136,-104v-34,0,-91,27,-94,47v16,51,125,16,125,-22v0,-17,-10,-25,-31,-25xm161,-160v0,8,-4,13,-12,13v-17,0,-19,-19,-16,-34v18,-1,29,1,28,21xm65,-185v7,3,28,9,28,18v0,7,-9,18,-18,17v-18,1,-25,-24,-10,-35&quot;,w:191},&quot;õ&quot;:{d:&quot;102,-132v50,-20,99,16,99,60v0,54,-60,64,-108,79v-50,-2,-110,-48,-76,-100v22,-17,49,-33,85,-39xm136,-104v-34,0,-91,27,-94,47v16,51,125,16,125,-22v0,-17,-10,-25,-31,-25xm58,-199v26,-21,54,18,69,22v4,0,15,-5,34,-13v22,-9,21,-16,31,-13v3,11,-9,9,-7,22v-26,20,-46,30,-59,30v-2,4,-49,-28,-49,-29v-11,0,-32,31,-46,32v-12,-3,-13,-21,-4,-23v4,-6,14,-15,31,-28&quot;,w:191},&quot;ú&quot;:{d:&quot;196,-129v-1,-4,12,-13,15,-13v6,0,8,7,8,21v0,24,-7,25,-13,45v-7,7,-14,21,-24,29v-9,24,-61,45,-89,45v-63,0,-105,-72,-67,-126v24,-3,19,27,18,46v-1,26,23,42,54,40v38,-3,88,-51,98,-87xm106,-174v26,-11,48,-32,59,-14v3,11,-81,53,-89,54v-13,1,-15,-12,-11,-22v15,-7,14,-7,41,-18&quot;,w:213},&quot;ù&quot;:{d:&quot;196,-129v-1,-4,12,-13,15,-13v6,0,8,7,8,21v0,24,-7,25,-13,45v-7,7,-14,21,-24,29v-9,24,-61,45,-89,45v-63,0,-105,-72,-67,-126v24,-3,19,27,18,46v-1,26,23,42,54,40v38,-3,88,-51,98,-87xm126,-166v7,6,56,14,37,40v-28,-7,-62,-22,-100,-42v-2,-3,-2,-26,5,-23v16,4,42,18,58,25&quot;,w:213},&quot;û&quot;:{d:&quot;196,-129v-1,-4,12,-13,15,-13v6,0,8,7,8,21v0,24,-7,25,-13,45v-7,7,-14,21,-24,29v-9,24,-61,45,-89,45v-63,0,-105,-72,-67,-126v24,-3,19,27,18,46v-1,26,23,42,54,40v38,-3,88,-51,98,-87xm172,-143v-27,-6,-39,-26,-60,-37v-8,0,-10,4,-14,10v-11,15,-49,35,-56,0v17,-4,44,-32,61,-43v27,6,41,21,63,36v12,9,17,17,17,25v0,6,-3,9,-11,9&quot;,w:213},&quot;ü&quot;:{d:&quot;196,-129v-1,-4,12,-13,15,-13v6,0,8,7,8,21v0,24,-7,25,-13,45v-7,7,-14,21,-24,29v-9,24,-61,45,-89,45v-63,0,-105,-72,-67,-126v24,-3,19,27,18,46v-1,26,23,42,54,40v38,-3,88,-51,98,-87xm168,-161v0,8,-3,13,-11,13v-17,0,-20,-19,-17,-34v18,-1,29,1,28,21xm72,-186v7,3,29,9,28,18v0,7,-9,18,-18,17v-18,1,-25,-24,-10,-35&quot;,w:213},&quot;†&quot;:{d:&quot;22,-286v15,6,5,-20,19,-19v9,-3,15,21,17,22v6,1,12,3,20,6v3,10,5,16,-9,16v-34,-10,-6,51,-34,52v-20,-7,11,-47,-15,-49v-14,3,-25,-5,-17,-24v7,-2,14,-4,19,-4&quot;,w:77},&quot;°&quot;:{d:&quot;106,-268v0,36,-35,38,-51,46v-48,5,-60,-58,-25,-78v33,-11,76,-9,76,32xm38,-257v16,7,39,2,38,-17v-13,-9,-28,-1,-32,11v-5,3,-7,0,-6,6&quot;,w:114},&quot;¢&quot;:{d:&quot;105,-188v13,-12,14,-18,26,-15v7,23,7,15,-3,49v6,0,18,14,17,20v-3,5,-12,19,-26,13v-14,1,-14,5,-16,21v10,10,46,-13,38,18v-9,17,-23,16,-54,20v-17,16,-4,55,-29,60v-37,-10,19,-64,-24,-71v-20,-10,-37,-47,-6,-62v23,-20,73,-4,77,-53xm65,-101v4,-9,7,-8,3,-13v-14,4,-22,10,-3,13&quot;,w:154},&quot;£&quot;:{d:&quot;153,-170v3,22,62,0,49,39v-18,6,-31,12,-58,9v-12,-1,-17,30,-23,39v19,26,50,56,91,35v9,-2,27,-13,27,4v0,27,-27,39,-58,42v-32,-5,-59,-19,-78,-39v-6,1,-35,44,-57,39v-25,0,-37,-15,-37,-46v0,-41,43,-53,73,-50v4,1,12,-18,12,-21v-7,-15,-49,0,-44,-30v-2,-31,31,-16,60,-19v16,-30,25,-119,93,-113v16,2,75,16,50,44v-4,5,-7,7,-12,8v-18,-12,-32,-18,-41,-18v-35,-1,-38,52,-47,77xm43,-45v4,5,12,-2,11,-9v-1,2,-12,1,-11,9&quot;,w:242},&quot;§&quot;:{d:&quot;141,-115v12,10,29,36,28,56v-4,68,-129,69,-152,16v-1,-12,-10,-22,8,-23v17,3,47,21,67,23v16,1,40,-8,38,-21v-8,-49,-119,-30,-117,-85v1,-28,15,-45,-3,-64v-1,-53,55,-61,103,-62v15,-5,6,-5,20,-2v16,17,23,27,23,30v-1,26,-29,7,-45,7v-21,0,-51,2,-62,17v19,14,87,8,97,43v18,14,16,57,-5,65xm64,-147r57,17v10,-28,-22,-43,-47,-44v-25,-1,-35,19,-10,27&quot;,w:174},&quot;•&quot;:{d:&quot;130,-114v0,47,-124,54,-120,-8r6,-31v44,-28,64,-34,104,0v8,6,10,20,10,39&quot;,w:139},&quot;¶&quot;:{d:&quot;121,-237v21,-9,44,-13,63,-1v-1,7,5,6,7,11r-4,190v-2,33,4,39,-15,40v-16,1,-10,-20,-10,-33r4,-161v0,-17,-1,-34,-16,-25v2,10,1,23,1,35v-9,46,-6,75,-15,156v-3,4,-7,5,-12,5v-17,-10,-3,-89,-10,-115v-43,14,-98,10,-101,-29v-4,-53,59,-63,104,-75v3,1,4,2,4,2xm95,-204v2,9,-30,50,1,50v35,0,23,-13,29,-43v0,-1,-2,-7,-4,-15v-12,-1,-14,2,-26,8&quot;,w:206},&quot;ß&quot;:{d:&quot;33,10v-29,4,-28,-32,-16,-70v18,-58,17,-137,56,-176v12,-24,46,-58,82,-43v20,8,47,24,47,54v0,30,-62,59,-67,90v33,23,56,33,63,63v-18,21,-22,36,-48,54v-24,17,-27,41,-53,16v-2,-19,7,-35,24,-42v15,-13,26,-22,34,-40v-13,-17,-78,-29,-56,-70v-3,-27,64,-54,66,-86v-8,-25,-41,-4,-52,8v-29,30,-47,83,-51,141v-17,25,-8,71,-29,101&quot;},&quot;®&quot;:{d:&quot;75,-194v78,-29,116,9,130,84v-2,42,-22,47,-57,67v-74,20,-161,-19,-129,-110v6,-18,29,-34,57,-40xm46,-86v51,36,84,21,129,-15v7,-15,0,-39,-10,-49v-13,-37,-49,-26,-86,-18v-28,7,-49,46,-33,82xm72,-123v-5,-43,68,-57,75,-14v-17,26,-18,17,3,32v2,25,-25,18,-45,7r-4,-4v-1,8,-3,20,-12,24v-10,-3,-21,-34,-17,-45xm112,-135v-10,-1,-20,13,-9,14v6,-6,9,-11,9,-14&quot;,w:217},&quot;©&quot;:{d:&quot;102,-29v-74,5,-124,-84,-70,-140v22,-22,53,-35,97,-38v46,-4,88,49,74,100v0,44,-51,75,-101,78xm96,-66v42,-3,75,-23,75,-69v0,-23,-4,-38,-44,-38v-16,0,-33,6,-49,20v36,-4,55,-12,62,20v-5,16,-49,1,-50,21v10,15,53,-14,54,11v0,18,-14,27,-42,27v-22,1,-46,-11,-46,-31v0,-25,7,-39,20,-44v-1,-1,-2,-2,-3,-2v-51,22,-32,89,23,85&quot;,w:217},&quot;™&quot;:{d:&quot;213,-307v28,9,11,49,7,75v-1,4,-4,6,-11,6v-7,1,-11,-14,-11,-34v-14,-6,-34,34,-46,28v-2,0,-10,-9,-24,-27v-10,7,-3,36,-27,31v-15,-24,-3,-27,1,-48v-6,-7,-27,-1,-31,3v-3,14,-7,30,-11,51v-5,10,-29,9,-24,-12v-5,-8,1,-18,3,-35v-13,6,-33,2,-29,-18v20,-17,64,-17,100,-19v28,-1,29,30,45,39v11,-6,35,-32,58,-40&quot;,w:239},&quot;´&quot;:{d:&quot;52,-284v29,-11,50,-34,62,-14v3,12,-86,54,-94,56v-14,0,-16,-12,-12,-23v11,-5,25,-11,44,-19&quot;,w:120},&quot;¨&quot;:{d:&quot;124,-259v0,9,-4,13,-12,13v-18,0,-22,-21,-17,-35v19,-1,30,1,29,22xm23,-285v7,2,30,9,29,18v1,10,-9,19,-18,19v-19,0,-28,-26,-11,-37&quot;,w:136},&quot;≠&quot;:{d:&quot;48,-130v29,11,49,-57,60,-50v25,6,7,27,-1,46v22,5,29,7,21,22v-18,2,-48,-1,-50,15v9,8,53,-7,54,10v-4,22,-46,20,-72,24v-7,13,-18,32,-34,57v-8,6,-15,-3,-13,-14v-1,-9,15,-39,14,-45v-30,5,-24,-17,-13,-25v12,-1,36,4,29,-13v-14,0,-47,6,-36,-12v0,-18,27,-13,41,-15&quot;,w:140},&quot;Æ&quot;:{d:&quot;335,-259v0,30,-102,12,-122,34v10,21,2,79,16,100v24,-6,59,-13,86,-16v23,-2,32,21,13,26r-103,29v-3,22,-4,38,8,43v28,-5,60,-6,86,-14v5,-1,14,7,14,11v6,16,-90,40,-107,40v-29,0,-39,-19,-32,-46v-2,-4,0,-26,-9,-28v-29,2,-58,6,-88,6v-31,0,-40,74,-82,73v-18,-23,4,-37,12,-50v40,-65,112,-126,165,-207v20,-17,69,-11,112,-13v21,0,31,4,31,12xm123,-111v28,1,44,-2,67,-10v-4,-22,5,-49,-7,-65v-3,6,-65,61,-60,75&quot;,w:348},&quot;Ø&quot;:{d:&quot;76,-211v41,-13,100,-22,140,-3v26,-19,40,-29,44,-29v10,0,15,7,15,20v0,15,-23,23,-30,35v23,39,29,114,-21,139v-36,19,-102,35,-147,18v-14,-5,-29,29,-46,35v-25,-13,-19,-24,3,-56v-9,-17,-28,-27,-28,-60v0,-38,23,-72,70,-99xm107,-66v55,15,125,-12,123,-70v0,-16,-5,-25,-13,-29r-110,95r0,4xm39,-108v-1,3,17,31,22,27v8,-6,109,-90,123,-106v-15,-11,-43,1,-63,2v-33,10,-80,35,-82,77&quot;,w:270},&quot;∞&quot;:{d:&quot;322,-72v-4,22,-54,41,-76,41v-43,0,-83,-17,-114,-35v-46,19,-125,53,-128,-18v-1,-14,10,-22,13,-35v29,-10,62,-31,97,-4v37,28,47,5,75,-8v40,-19,73,-10,114,1v13,1,18,55,19,58xm228,-69v15,0,62,-12,61,-25v-19,-23,-89,-10,-105,11v0,2,1,4,2,4v28,6,42,10,42,10xm75,-102v-13,2,-41,4,-44,19v0,4,3,7,10,7v21,0,40,-6,54,-17v-9,-6,-16,-9,-20,-9&quot;,w:330},&quot;±&quot;:{d:&quot;93,-163v-7,46,76,-4,46,47v-14,6,-27,13,-38,8v-24,2,-14,28,-28,44r-14,0v-7,-12,-5,-15,-7,-33v-12,-7,-41,-1,-37,-24v2,-11,23,-17,36,-14r28,-38v4,0,9,4,14,10xm113,-27v-12,18,-58,27,-85,24v-16,2,-22,-23,-13,-36v28,-7,85,-11,98,12&quot;,w:151},&quot;≤&quot;:{d:&quot;73,-109v10,15,87,16,87,42v0,11,-5,16,-13,16v-36,-11,-69,-24,-109,-31v-18,-8,-18,-13,-9,-36v59,-56,93,-83,101,-83v16,0,18,17,14,28v-27,24,-42,35,-71,64xm10,-29v35,-12,117,-26,148,-3v1,2,-5,19,-8,18r-124,15v-16,2,-26,-18,-16,-30&quot;,w:168},&quot;≥&quot;:{d:&quot;115,-174v20,7,53,36,20,57v-19,11,-91,68,-82,59v-18,3,-25,-22,-13,-31v15,-10,14,-10,70,-51r-50,-37v-5,-4,-5,-27,4,-28v16,7,40,17,51,31xm14,-32v33,-10,86,-14,127,-10v12,12,5,23,-11,27v-49,9,-82,13,-99,13v-22,0,-24,-16,-17,-30&quot;,w:163},&quot;¥&quot;:{d:&quot;31,-248v30,-3,64,64,74,59v37,-22,77,-65,107,-82v20,-11,34,18,21,32v-28,19,-52,38,-70,57v-18,8,-40,21,-35,60v2,19,39,7,64,7v25,0,16,21,2,27v-36,16,-46,8,-68,18v6,11,101,-20,66,24v-21,11,-42,12,-75,20v-2,1,-5,6,-10,18v-8,3,-11,10,-24,8v-7,-17,-2,-18,-9,-26v-13,5,-39,3,-53,-2v-10,-17,-7,-27,0,-34v23,-1,45,1,64,-5v-11,-7,-28,-4,-64,-6v-13,-8,-15,-24,-6,-35v33,-2,102,9,76,-37v-14,-14,-33,-38,-60,-66v-10,-10,-8,-28,0,-37&quot;,w:219},&quot;µ&quot;:{d:&quot;123,-114v41,0,54,-9,127,-17v12,-2,20,-6,25,-12v5,-78,43,-127,119,-138v38,-5,46,23,55,48v-5,5,2,4,2,12v-2,47,-72,81,-129,95v-17,4,-12,32,-2,39v30,-5,24,0,99,4v14,9,14,20,-1,23v-17,3,-71,-1,-85,13v1,19,18,35,-3,47v-1,-6,-10,-7,-16,-5v-3,-3,-20,-37,-29,-41v-15,8,-50,22,-49,-9v1,-19,2,-27,28,-26v24,1,13,-12,8,-30v-22,1,-64,16,-111,23v-50,7,-17,47,-17,57v0,10,-5,15,-13,15v-20,-9,-27,-30,-33,-55v-20,-17,-52,8,-85,-6v-2,-10,-13,-26,4,-29v32,-6,41,-1,65,-7v-17,-74,-4,-173,69,-180v55,-20,130,8,131,65v-11,9,-10,2,-29,-11v-33,-23,-37,-26,-76,-25v-41,13,-69,38,-67,100v0,34,4,50,13,50xm317,-152v29,-6,106,-43,106,-71v0,-23,-24,-25,-42,-17v-31,1,-74,48,-64,88&quot;,w:462},&quot;∂&quot;:{d:&quot;456,-113v55,-37,119,-8,176,5v-19,37,-104,-5,-144,18v-5,64,-45,87,-130,87v-43,0,-70,-8,-96,-21v-54,15,-146,29,-209,10v-18,-11,-43,-26,-46,-53v-1,-9,28,-48,51,-46v55,-10,55,-8,101,-8v29,0,17,-26,23,-56v4,-19,4,-74,34,-49v4,42,-7,83,-10,124v0,4,-11,10,-34,17v-29,-1,-45,-4,-74,1v-10,2,-57,3,-52,18v30,43,132,30,190,18v2,-10,-7,-19,-5,-28v5,-36,31,-59,74,-56v27,2,71,4,70,35v-1,30,-37,41,-58,57v35,13,131,15,135,-23v2,-19,-5,-36,4,-50xm262,-85v0,3,13,28,19,25v7,0,48,-13,61,-29v-10,-17,-71,-17,-80,4&quot;,w:640},&quot;∑&quot;:{d:&quot;235,-95v-3,-59,120,-41,160,-28v3,-2,15,-3,14,4v1,3,-16,19,-21,18r-97,4v-25,5,-18,18,-23,56v-16,14,-25,24,-36,18v-83,32,-154,29,-212,-17v-45,-68,41,-114,107,-119v50,-4,59,66,22,85v-16,8,-61,10,-79,15v36,27,185,24,165,-36xm128,-119v-23,-3,-43,4,-53,15v13,5,46,-4,53,-15&quot;,w:414},&quot;∏&quot;:{d:&quot;243,-190v7,-18,27,-19,38,6v0,2,-5,8,-14,16v-8,-9,-27,-4,-24,-22xm221,-111v55,-7,60,22,45,64v5,23,17,47,-22,47v-35,0,-18,-40,-15,-70v-2,-19,-35,-13,-52,-18v-2,0,-13,1,-34,3v-4,0,-10,11,-13,31v-3,20,1,43,-11,54v-12,-4,-13,-5,-21,-3v-13,-13,-3,-25,-12,-41v7,-6,12,-22,10,-39v-23,-8,-79,15,-87,-21v12,-28,78,-4,101,-20r36,-96v8,-19,17,-28,27,-28v10,0,15,6,15,18v-6,32,-31,62,-38,109v25,10,47,-1,71,10&quot;,w:282},&quot;π&quot;:{d:&quot;247,-240v-3,5,-14,12,-21,6v-41,5,-71,-4,-85,37v-6,7,-21,42,-25,61v28,12,104,-16,129,24v8,11,12,24,12,38v-7,17,-2,99,-40,68v-9,-23,-5,-47,-1,-73v3,-24,-40,-24,-50,-19v-4,0,-18,2,-44,6v-30,-6,-16,49,-33,58v-19,-11,-14,2,-29,-10v8,-71,20,-114,43,-170v-24,-2,-49,4,-73,7v-30,3,-32,-33,-7,-36r184,-22v17,-1,40,13,40,25&quot;,w:265},&quot;∫&quot;:{d:&quot;62,-151v-7,-70,20,-130,63,-150v28,1,39,10,70,23v20,8,6,33,-6,35v-29,-13,-45,-20,-49,-20v-20,-4,-45,51,-43,70v8,60,5,129,5,189v0,62,-27,93,-79,93v-37,-1,-71,-14,-63,-57v21,0,79,34,91,-2v16,-3,14,-64,21,-85v-2,-31,-1,-74,-10,-96&quot;,w:156},&quot;ª&quot;:{d:&quot;6,-265v1,-31,58,-53,80,-22v-11,14,25,28,25,36v-2,8,-15,12,-27,10v-22,-29,-68,19,-78,-24xm52,-281v-8,1,-24,10,-9,13v11,1,24,-10,9,-13&quot;,w:117},&quot;º&quot;:{d:&quot;13,-273v1,-31,56,-41,83,-18v36,8,14,48,-9,52v-35,6,-64,-5,-74,-34xm81,-269v-7,-7,-20,-11,-29,-6v5,13,13,11,29,6&quot;,w:128},&quot;Ω&quot;:{d:&quot;121,-111v9,16,43,-5,54,5v28,-4,62,8,81,-5v48,-33,166,-28,160,44v15,34,-51,53,-88,53v-34,0,-53,-21,-71,-37v-15,7,-32,-4,-28,-22v-26,-4,-93,-6,-108,8v8,17,5,37,12,54v-1,15,-18,15,-31,10v-9,-15,-20,-39,-19,-63v-20,-9,-73,15,-79,-18v4,-28,50,-11,77,-24v12,-99,36,-168,137,-178v35,5,64,20,67,57v0,13,-14,18,-20,5v-15,-35,-83,-31,-104,4v-26,20,-39,82,-40,107xm334,-45v15,2,51,-14,53,-22v-7,-20,-36,-31,-69,-29v-8,-1,-39,6,-37,14v-3,10,44,38,53,37&quot;,w:424},&quot;æ&quot;:{d:&quot;145,-44r33,7v2,42,-59,29,-85,16v-6,7,-35,24,-48,15v-19,2,-35,-21,-33,-37v2,-24,5,-19,28,-36v-6,-8,-45,3,-33,-21v21,-22,58,-12,85,-1v6,-5,35,-28,45,-15v20,-4,36,17,36,35v0,23,-4,21,-28,37xm111,-72v12,3,49,-16,19,-17v-5,0,-20,12,-19,17xm74,-50v-14,-4,-48,16,-19,17v4,1,19,-14,19,-17&quot;,w:184},&quot;ø&quot;:{d:&quot;76,-136v17,7,33,-8,51,0v9,-6,21,-13,36,-21v23,22,-13,31,3,50v11,13,4,21,14,35v-4,5,-1,14,-4,23v-14,23,-45,41,-84,39v-12,2,-29,28,-41,38v-2,-11,-34,-10,-15,-30v3,-7,5,-11,5,-11v-15,-24,-60,-54,-22,-89v23,-21,25,-32,57,-34xm102,-54v18,1,50,-19,30,-32v-12,7,-22,18,-30,32xm85,-92v-14,3,-26,8,-38,17v2,20,17,13,26,0v6,-8,12,-13,12,-17&quot;,w:188},&quot;¿&quot;:{d:&quot;181,-247v3,1,31,2,29,15v-4,22,-37,27,-41,4v1,-5,7,-20,12,-19xm161,-34v-45,-1,-105,19,-124,51v0,11,18,17,54,17v39,0,82,-13,112,4v-10,35,-58,31,-100,31v-47,0,-80,-10,-99,-31v-10,-56,22,-73,64,-90v8,-3,32,-9,74,-18v21,-15,7,-62,22,-92v-1,-5,-1,-11,4,-12v16,0,24,7,24,22v-8,30,-8,73,-17,111v-3,5,-7,7,-14,7&quot;,w:213},&quot;¡&quot;:{d:&quot;86,-197v8,16,-7,41,-24,25v-11,-11,-4,-16,-3,-29v13,0,15,-2,27,4xm46,-107v4,-8,11,-16,23,-7v19,26,-5,57,-6,87v-7,0,-5,18,-9,28v0,14,-17,52,-11,70v-2,7,-15,28,-25,12v-4,-6,-15,-7,-6,-16v2,-39,14,-96,34,-174&quot;,w:95},&quot;¬&quot;:{d:&quot;141,-99v47,7,103,-3,149,6v14,24,18,15,10,39v-10,34,-7,31,-26,76v-4,6,-15,8,-16,21v-4,2,-4,1,-13,5v-22,-33,-4,-33,16,-104v-5,-9,-28,-4,-38,-6r-183,4v-14,0,-41,-29,-17,-36v31,-9,82,5,118,-5&quot;,w:315},&quot;√&quot;:{d:&quot;364,-218v43,-21,80,-51,104,-32v-3,19,-24,21,-44,40v-41,15,-78,53,-136,78r-137,98v-20,16,-79,66,-91,68v-3,1,-25,-11,-24,-13v-4,-28,-43,-61,-30,-85v26,-15,42,19,58,32r295,-188v0,1,2,2,5,2&quot;,w:474},&quot;ƒ&quot;:{d:&quot;115,-262v-23,6,-39,63,-38,96v1,3,57,2,54,16v1,22,-45,15,-51,30v3,34,12,68,10,103v14,17,-18,53,-28,63v-48,8,-89,5,-95,-37v20,-5,77,21,83,-18v17,-29,-4,-61,0,-98v0,-5,-3,-10,-7,-17v-33,4,-43,-17,-25,-37v10,-4,27,5,27,-10v0,-43,15,-77,32,-109v12,-7,16,-22,38,-20v11,1,51,35,25,55v-9,1,-16,-17,-25,-17&quot;,w:145},&quot;≈&quot;:{d:&quot;133,-112v21,15,48,-30,78,-17v3,3,5,7,5,9v-8,30,-47,45,-76,45v-19,0,-64,-48,-90,-21r-29,20v-6,-1,-17,-16,-15,-32v24,-17,70,-42,107,-21v4,4,10,9,20,17xm138,-57v28,2,48,-25,76,-26v13,30,-21,42,-40,53v-41,24,-77,-15,-114,-23v-15,14,-46,32,-49,-1v-3,-9,27,-28,54,-30&quot;,w:223},&quot;∆&quot;:{d:&quot;18,-1v-24,-30,8,-48,25,-71v14,-19,34,-28,40,-56v20,-35,29,-14,57,4v9,39,43,62,57,102v0,16,-34,17,-50,14v-28,2,-72,4,-129,7xm139,-47r-22,-52v-12,-5,-12,15,-24,27v-7,6,-14,16,-23,28v23,1,36,-1,69,-3&quot;,w:199},&quot;«&quot;:{d:&quot;191,-64v16,6,87,37,53,63v-39,-9,-71,-28,-107,-40v-14,-13,-13,-34,10,-47v27,-15,48,-55,84,-62v9,-2,21,10,21,18r-13,21v-16,5,-44,22,-51,41v0,4,1,6,3,6xm71,-65v17,6,87,35,55,62v-39,-8,-66,-27,-108,-40v-14,-13,-13,-36,10,-46v23,-18,50,-56,84,-63v9,-2,21,10,21,18r-13,22v-20,6,-32,17,-51,37v0,3,-1,11,2,10&quot;,w:265},&quot;»&quot;:{d:&quot;120,-129v9,-33,48,-10,64,5v9,20,86,52,50,86v-36,11,-66,31,-107,40v-6,-7,-9,-13,-9,-17v-2,-13,50,-46,63,-46v11,-18,-33,-42,-48,-47xm1,-128v10,-33,46,-8,64,6v8,19,86,50,51,85v-40,13,-69,30,-108,40v-6,-7,-8,-12,-8,-16v-2,-14,50,-46,63,-47v7,-13,-9,-20,-19,-30v-10,-9,-20,-15,-30,-17&quot;,w:252},&quot;…&quot;:{d:&quot;244,-24v-1,21,-38,32,-41,3v-2,-19,23,-22,34,-17v0,7,0,15,7,14xm113,-24v0,-22,28,-21,38,-8v5,34,-39,40,-38,8xm35,-2v-10,-2,-36,-17,-18,-29v-1,-15,17,-17,31,-6v7,17,6,33,-13,35&quot;,w:258},&quot; &quot;:{w:179},&quot;À&quot;:{d:&quot;161,-217v20,53,23,124,54,170v-2,20,-34,9,-42,0v-27,-12,-78,-18,-101,-18v-26,6,-29,51,-54,63v-18,-4,-19,-30,-3,-38v5,-9,15,-16,8,-29v1,-12,23,-9,26,-19v6,-10,11,-20,20,-27r70,-121v12,-4,16,4,22,19xm82,-91v17,3,62,7,86,13v-13,-33,-13,-80,-29,-109v-15,30,-38,63,-57,96xm150,-268v14,10,54,14,37,41v-28,-7,-62,-22,-100,-42v-2,-3,-2,-26,5,-23v16,4,42,17,58,24&quot;},&quot;Ã&quot;:{d:&quot;161,-217v20,53,23,124,54,170v-2,20,-34,9,-42,0v-27,-12,-78,-18,-101,-18v-26,6,-29,51,-54,63v-18,-4,-19,-30,-3,-38v5,-9,15,-16,8,-29v1,-12,23,-9,26,-19v6,-10,11,-20,20,-27r70,-121v12,-4,16,4,22,19xm82,-91v17,3,62,7,86,13v-13,-33,-13,-80,-29,-109v-15,30,-38,63,-57,96xm100,-285v26,-19,54,19,69,22v4,0,15,-5,34,-13v23,-9,22,-17,31,-12v3,11,-9,9,-7,21v-26,20,-46,30,-59,30v-3,3,-50,-26,-49,-29v-12,1,-31,35,-51,32v-3,-8,-5,-14,-5,-18v10,-9,16,-17,37,-33&quot;},&quot;Õ&quot;:{d:&quot;62,-184v78,-31,249,-50,238,74v-6,65,-102,105,-179,115v-77,-7,-152,-71,-101,-149v2,-5,24,-33,42,-40xm279,-120v14,-38,-47,-64,-85,-61v-20,-9,-41,7,-62,0v-11,7,-54,12,-66,24v0,20,-51,35,-38,66v-1,43,50,67,96,67v44,0,162,-55,155,-96xm116,-270v26,-19,54,19,69,22v4,0,15,-5,34,-13v23,-10,22,-16,31,-12v3,11,-8,9,-7,21v-45,28,-47,42,-88,16v-29,-19,-12,-20,-43,2v-8,5,-12,18,-23,15v-13,-3,-12,-20,-4,-23v4,-6,14,-15,31,-28&quot;,w:273},&quot;Œ&quot;:{d:&quot;247,-243v71,4,161,-7,245,-8v17,0,27,6,27,17v-8,27,-70,14,-104,23v-3,1,-52,0,-65,7r0,4v16,16,17,29,17,65v32,10,74,-14,99,16v-14,25,-76,17,-127,24v-17,18,-55,32,-75,51v85,0,128,-3,204,-11v15,-2,21,11,20,29v-78,24,-177,12,-270,24v-24,3,-24,-29,-48,-15v-46,7,-70,4,-105,-4v-19,-18,-42,-22,-52,-55v-10,-34,0,-47,12,-78v-18,-59,48,-78,105,-84v17,-18,103,-13,117,-5xm125,-45v76,-9,186,-43,209,-105v-26,-67,-137,-83,-217,-54v3,34,-45,25,-60,58v-41,48,5,108,68,101&quot;,w:492},&quot;œ&quot;:{d:&quot;185,-54v25,28,107,-17,104,33v-12,12,-60,14,-87,14v0,0,1,1,2,1v-11,1,-39,-9,-50,-17v-28,17,-75,32,-114,7v-22,-14,-34,-11,-34,-41v0,-36,33,-49,48,-75v29,-16,72,-3,95,11v12,-9,48,-27,59,-26v30,0,64,15,65,40v0,7,-6,20,-20,37v-29,1,-44,11,-68,16xm226,-106v-21,-7,-41,-2,-48,13v14,1,42,-7,48,-13xm132,-87v-21,-35,-94,11,-92,24v-2,14,43,21,61,21v25,0,36,-20,31,-45&quot;,w:295},&quot;–&quot;:{d:&quot;6,-66v-8,-72,79,-21,146,-39v37,-10,79,7,111,0v9,8,14,13,14,17v2,26,-72,13,-99,21v-83,4,-124,21,-172,1&quot;,w:282},&quot;—&quot;:{d:&quot;175,-106v86,-9,201,1,286,-1v11,6,13,11,6,30v-118,15,-246,10,-377,10v-25,0,-73,3,-82,-8r-2,-26v11,-13,32,-9,52,-7v38,3,84,-5,117,2&quot;,w:485},&quot;“&quot;:{d:&quot;66,-261v-21,5,-37,51,-22,77v0,4,-2,6,-7,6v-31,-9,-38,-62,-12,-94v12,-15,21,-28,31,-34v16,-1,19,24,22,34v10,-11,22,-32,43,-23v-2,8,4,16,5,19v-6,11,-51,53,-29,74v-12,21,-30,5,-33,-17v-6,-13,9,-28,2,-42&quot;,w:118},&quot;”&quot;:{d:&quot;120,-294v12,3,30,26,19,34v2,15,-40,70,-55,66v-40,-10,10,-51,14,-64v3,-3,8,-31,22,-36xm70,-306v14,3,26,34,16,49v-19,30,-31,45,-58,59v-12,-11,-33,-17,-7,-36v13,-19,36,-27,36,-59v0,-5,9,-13,13,-13&quot;,w:148},&quot;‘&quot;:{d:&quot;73,-262v-10,7,-41,39,-38,69v-15,13,-27,-16,-28,-28v-2,-20,51,-83,66,-83v20,0,25,41,0,42&quot;,w:95},&quot;’&quot;:{d:&quot;74,-300v13,31,-1,99,-44,101v-13,0,-19,-5,-19,-15v6,-10,31,-34,35,-59v2,-11,1,-32,11,-32v6,0,11,2,17,5&quot;,w:90},&quot;÷&quot;:{d:&quot;167,-158v-4,3,-7,9,-10,20v-23,4,-34,-8,-29,-31v14,-6,18,1,39,11xm78,-72v-53,11,-53,12,-69,-15v-1,-12,11,-17,22,-14v71,-13,151,-18,230,-24v11,1,21,16,23,28v-28,20,-90,11,-126,16v-36,5,-62,5,-80,9xm123,-40v19,-17,41,-1,41,17v0,13,-6,19,-17,19v-15,0,-29,-14,-24,-36&quot;,w:293},&quot;◊&quot;:{d:&quot;76,-158v48,-8,64,11,100,36v28,19,-5,39,-22,54v-15,13,-40,32,-48,49v-17,5,-12,0,-27,-16v-6,-6,-86,-31,-68,-53r2,-9v27,-23,48,-44,63,-61xm93,-65v12,-2,35,-31,41,-38v-5,-10,-16,-14,-34,-24v-12,12,-36,29,-40,44v19,11,30,18,33,18&quot;,w:199},&quot;ÿ&quot;:{d:&quot;118,85v-11,11,-11,38,-22,61v-2,-1,-2,31,-17,27v-11,0,-21,-10,-21,-22v20,-66,23,-61,64,-168v-22,1,-38,16,-58,4v-22,4,-51,-16,-51,-42v-11,-13,-7,-59,7,-58v16,1,21,24,22,51v21,33,66,5,94,-7v4,-3,26,-14,38,-29r17,0v23,44,-23,59,-34,102v-6,9,-13,9,-13,26v-15,6,-12,33,-27,48v0,2,1,4,1,7xm158,-136v0,8,-4,13,-12,13v-18,0,-21,-20,-16,-34v18,-1,29,1,28,21xm62,-161v7,3,28,9,27,18v1,8,-8,17,-17,17v-18,0,-26,-24,-10,-35&quot;,w:190},&quot;Ÿ&quot;:{d:&quot;176,-189v35,20,-25,54,-39,72v-26,34,-57,57,-74,104v-10,15,-4,14,-23,3r0,-10v19,-44,27,-46,50,-81v-9,-5,-24,4,-34,4v-38,0,-54,-50,-44,-87v21,-5,18,19,22,35v4,18,15,27,29,27v41,0,60,-39,113,-67xm153,-222v0,8,-3,12,-11,12v-18,0,-21,-19,-16,-33v18,-1,28,2,27,21xm57,-247v8,2,29,9,28,17v0,21,-37,24,-36,1v0,-7,2,-13,8,-18&quot;,w:135},&quot;⁄&quot;:{d:&quot;193,-305v7,6,17,31,3,41v-10,7,-12,13,-21,25v-79,56,-190,209,-197,260r-18,0v-23,-19,9,-70,15,-85v52,-83,121,-179,218,-241&quot;,w:120},&quot;¤&quot;:{d:&quot;308,-133r-200,16v-2,1,-6,4,-10,10v70,-2,144,-14,211,-8v3,0,8,4,13,8v-1,4,-3,9,-9,17v-57,11,-164,6,-219,25v26,32,112,25,173,25v9,0,35,2,35,19v0,9,-4,13,-12,14v-115,12,-146,23,-211,-19v-12,-4,-22,-9,-25,-27v-6,-29,-61,3,-43,-49v17,-1,36,7,42,-12v-32,7,-36,-39,-11,-40v29,14,63,-25,73,-30v52,-25,72,-44,142,-44v23,0,21,41,-1,39v-35,-3,-61,9,-102,31v2,2,5,4,8,4v18,-6,101,-9,115,-9v7,0,55,13,31,30&quot;,w:312},&quot;€&quot;:{d:&quot;308,-133r-200,16v-2,1,-6,4,-10,10v70,-2,144,-14,211,-8v3,0,8,4,13,8v-1,4,-3,9,-9,17v-57,11,-164,6,-219,25v26,32,112,25,173,25v9,0,35,2,35,19v0,9,-4,13,-12,14v-115,12,-146,23,-211,-19v-12,-4,-22,-9,-25,-27v-6,-29,-61,3,-43,-49v17,-1,36,7,42,-12v-32,7,-36,-39,-11,-40v29,14,63,-25,73,-30v52,-25,72,-44,142,-44v23,0,21,41,-1,39v-35,-3,-61,9,-102,31v2,2,5,4,8,4v18,-6,101,-9,115,-9v7,0,55,13,31,30&quot;,w:312},&quot;‹&quot;:{d:&quot;64,-107v9,17,86,17,87,43v0,11,-4,16,-13,16v-36,-11,-70,-22,-109,-31v-19,-4,-18,-14,-9,-36v59,-56,93,-84,101,-84v17,0,19,20,13,29&quot;,w:159},&quot;›&quot;:{d:&quot;41,-181v26,27,112,44,70,91r-82,60v-20,3,-25,-23,-13,-32r70,-51r-66,-46v-5,-6,-4,-28,5,-29v4,2,9,4,16,7&quot;,w:137},&quot;&quot;:{d:&quot;74,-74v-6,-24,-70,8,-68,-27v0,-6,6,-20,20,-18v44,6,45,-9,42,-49v7,-40,26,-114,90,-104v48,-2,63,-1,90,30v11,25,4,14,2,44v-7,17,-54,9,-49,-7r8,-21v-5,-13,-22,-9,-43,-11v-56,-6,-63,45,-67,92v-2,21,5,23,22,22v37,-1,80,-9,113,-1v13,31,-9,82,-22,106v-13,10,-26,-6,-22,-25r11,-46v0,-3,-2,-6,-6,-6v-19,0,-47,3,-83,9v-6,1,-9,4,-8,11r12,59v-1,9,-11,30,-23,18v-18,-18,-15,-59,-19,-76&quot;,w:272},&quot;&quot;:{d:&quot;43,-61v-21,4,-36,2,-39,-15v-4,-35,41,-8,34,-47v4,-59,12,-99,46,-124v11,-42,157,-47,149,13v1,7,-7,15,-13,15v-18,-7,-19,-26,-47,-23v-34,3,-65,6,-79,37v-12,27,-22,52,-21,91v13,9,31,-11,45,-4v32,-15,50,-6,94,-13v12,-30,19,-79,36,-133v1,-5,5,-8,12,-8v44,18,-18,106,-12,144v-9,22,-1,73,-16,104v2,28,-23,28,-37,16v1,-26,9,-48,11,-75v0,-6,-3,-9,-9,-9v-43,0,-83,8,-119,24v8,40,17,33,-7,56v-20,-9,-21,-19,-28,-49&quot;,w:283},&quot;‡&quot;:{d:&quot;102,-284v16,2,42,-2,33,18v-7,15,-42,1,-38,30v3,3,31,1,30,11v4,15,-29,19,-36,24v-2,18,-4,24,-16,29r-25,-26v-25,7,-53,3,-42,-25v4,-10,70,0,51,-22v-17,4,-41,12,-39,-15v-5,-16,39,-18,44,-20v4,-2,7,-10,10,-24v19,-3,23,6,28,20&quot;,w:145},&quot;∙&quot;:{d:&quot;57,-77v6,18,-7,21,-19,23v-34,6,-25,-40,-9,-43v18,-3,29,8,28,20&quot;,w:67},&quot;‚&quot;:{d:&quot;25,63v-26,21,-48,-2,-22,-24v14,-12,35,-40,35,-69v3,-2,3,-11,12,-9v35,17,5,88,-25,102&quot;,w:97},&quot;„&quot;:{d:&quot;25,63v-26,21,-48,-2,-22,-24v11,-9,36,-41,35,-69v3,-2,4,-12,12,-9v36,14,5,89,-25,102xm84,64v-24,20,-45,-1,-21,-24v21,-20,32,-35,35,-69v3,-2,3,-11,12,-9v36,17,9,86,-26,102&quot;,w:135},&quot;‰&quot;:{d:&quot;398,-131v58,-1,87,13,72,65v-1,30,-66,63,-99,65v-56,3,-99,-58,-62,-102v2,2,5,2,8,2v20,-16,51,-17,81,-30xm202,-279v33,0,94,-24,95,18v-7,31,-33,27,-54,55v-36,32,-71,74,-112,99v-18,18,-40,34,-51,58v-19,14,-25,37,-56,40v-17,2,-25,-29,-10,-40v15,-11,40,-37,52,-52r87,-72v-51,13,-100,6,-116,-27v1,-5,-6,-30,-9,-36v-3,-5,22,-41,27,-39v29,2,16,34,5,49v0,15,14,23,42,23v42,0,59,-31,28,-38v-17,-4,-53,3,-50,-23v0,-7,1,-12,4,-16v16,-9,36,4,49,5v0,0,23,-4,69,-4xm222,-118v33,-2,55,18,50,57v-29,36,-48,45,-96,50v-27,-5,-56,-17,-58,-51v13,-37,64,-43,104,-56xm335,-61v13,44,101,7,108,-31v-11,-3,-20,-4,-30,-4v-18,-1,-82,18,-78,35xm225,-244v-18,0,-29,-1,-46,3v7,15,6,28,0,43v15,-14,34,-30,46,-46xm164,-53v26,5,59,-10,76,-26v-17,-16,-49,2,-67,14v1,8,-8,6,-9,12&quot;,w:485},&quot;Â&quot;:{d:&quot;161,-217v20,53,23,124,54,170v-2,20,-34,9,-42,0v-27,-12,-78,-18,-101,-18v-26,6,-29,51,-54,63v-18,-4,-19,-30,-3,-38v5,-9,15,-16,8,-29v1,-12,23,-9,26,-19v6,-10,11,-20,20,-27r70,-121v12,-4,16,4,22,19xm82,-91v17,3,62,7,86,13v-13,-33,-13,-80,-29,-109v-15,30,-38,63,-57,96xm202,-219v-27,-6,-40,-26,-61,-37v-21,7,-39,46,-65,23v-2,-4,-3,-10,-4,-14v19,-4,43,-32,61,-43v27,6,40,22,62,37v12,8,18,17,18,25v0,6,-3,9,-11,9&quot;},&quot;Ê&quot;:{d:&quot;49,-160v1,-4,-10,-9,-15,-8v-15,-35,32,-30,57,-31r142,-8v2,1,30,7,40,10v-52,16,-133,17,-190,30v-7,9,-12,24,-15,47v26,10,102,-6,141,3v1,3,1,6,2,10v-36,18,-92,12,-149,21v-11,9,-16,41,-16,51v55,-1,111,-21,168,-13v15,-8,48,1,31,18v-53,16,-130,13,-198,29r-39,-8v-4,-19,17,-53,20,-76v-1,0,-7,-11,-9,-18v18,-7,22,-28,30,-57xm199,-211v-27,-6,-39,-26,-60,-37v-21,7,-40,47,-65,22v-2,-7,-2,-7,-4,-13v18,-5,44,-31,61,-43v27,6,41,22,62,37v12,9,18,17,18,25v0,6,-4,9,-12,9&quot;,w:252},&quot;Á&quot;:{d:&quot;161,-217v20,53,23,124,54,170v-2,20,-34,9,-42,0v-27,-12,-78,-18,-101,-18v-26,6,-29,51,-54,63v-18,-4,-19,-30,-3,-38v5,-9,15,-16,8,-29v1,-12,23,-9,26,-19v6,-10,11,-20,20,-27r70,-121v12,-4,16,4,22,19xm82,-91v17,3,62,7,86,13v-13,-33,-13,-80,-29,-109v-15,30,-38,63,-57,96xm84,-250v31,-5,83,-53,100,-31v0,5,-11,15,-35,28v-16,5,-51,28,-53,25v-14,1,-16,-11,-12,-22&quot;},&quot;Ë&quot;:{d:&quot;49,-160v1,-4,-10,-9,-15,-8v-15,-35,32,-30,57,-31r142,-8v2,1,30,7,40,10v-52,16,-133,17,-190,30v-7,9,-12,24,-15,47v26,10,102,-6,141,3v1,3,1,6,2,10v-36,18,-92,12,-149,21v-11,9,-17,41,-17,51v55,0,112,-21,169,-13v15,-8,48,1,31,18v-53,16,-130,13,-198,29r-39,-8v-3,-21,17,-53,20,-76v-1,0,-7,-11,-9,-18v18,-7,22,-28,30,-57xm191,-236v0,8,-4,13,-12,13v-17,0,-19,-19,-16,-34v18,-1,29,1,28,21xm95,-261v7,3,29,9,28,18v0,7,-9,17,-18,17v-18,0,-26,-25,-10,-35&quot;,w:252},&quot;È&quot;:{d:&quot;49,-160v1,-4,-10,-9,-15,-8v-15,-35,32,-30,57,-31r142,-8v2,1,30,7,40,10v-52,16,-133,17,-190,30v-7,9,-12,24,-15,47v26,10,102,-6,141,3v1,3,1,6,2,10v-36,18,-92,12,-149,21v-11,9,-16,41,-16,51v55,-1,111,-21,168,-13v15,-8,48,1,31,18v-53,16,-130,13,-198,29r-39,-8v-4,-19,17,-53,20,-76v-1,0,-7,-11,-9,-18v18,-7,22,-28,30,-57xm184,-236v6,9,5,13,0,23v-28,-7,-62,-21,-100,-41v-3,-2,-3,-27,5,-23v34,11,60,25,95,41&quot;,w:252},&quot;Í&quot;:{d:&quot;26,-5v-9,-6,-9,-12,-9,-36v0,-71,7,-119,21,-144v8,-13,14,-20,19,-20v28,19,-7,89,-10,120v-2,21,-8,47,-14,76v-2,1,-2,0,-7,4xm6,-233v31,-6,83,-53,101,-31v2,11,-80,53,-89,53v-14,1,-14,-11,-12,-22&quot;,w:104},&quot;Î&quot;:{d:&quot;53,-9v-15,7,-16,-3,-16,-32v0,-71,7,-119,21,-144v8,-13,14,-20,19,-20v28,19,-7,89,-10,120v-2,21,-8,47,-14,76xm137,-209v-27,-6,-40,-26,-61,-37v-8,0,-9,4,-13,10v-11,13,-50,37,-56,0v18,-5,43,-32,61,-43v28,5,40,21,62,36v12,9,18,17,18,25v0,6,-4,9,-11,9&quot;,w:144},&quot;Ï&quot;:{d:&quot;33,-5v-9,-6,-9,-12,-9,-36v0,-71,8,-119,22,-144v8,-13,14,-20,19,-20v27,20,-11,87,-10,120r-15,76v-1,1,-4,2,-7,4xm111,-222v0,8,-4,12,-12,12v-18,0,-19,-19,-16,-33v18,-1,29,1,28,21xm15,-247v8,2,29,9,28,17v0,21,-37,24,-36,1v0,-7,2,-13,8,-18&quot;,w:110},&quot;Ì&quot;:{d:&quot;33,-5v-9,-6,-9,-12,-9,-36v0,-71,8,-119,22,-144v8,-13,14,-20,19,-20v27,20,-11,87,-10,120r-15,76v-1,1,-4,2,-7,4xm72,-247v7,6,55,15,36,40v-28,-7,-61,-21,-99,-41v-3,-2,-3,-27,5,-23v18,3,41,17,58,24&quot;,w:111},&quot;Ó&quot;:{d:&quot;62,-184v78,-31,249,-50,238,74v-6,65,-102,105,-179,115v-77,-7,-152,-71,-101,-149v2,-5,24,-33,42,-40xm279,-120v14,-38,-47,-64,-85,-61v-20,-9,-41,7,-62,0v-11,7,-54,12,-66,24v0,20,-51,35,-38,66v-1,43,50,67,96,67v44,0,162,-55,155,-96xm142,-250v27,-11,47,-32,59,-14v2,11,-80,53,-89,53v-13,1,-15,-11,-12,-21v10,-5,24,-11,42,-18&quot;,w:273},&quot;Ô&quot;:{d:&quot;62,-184v78,-31,249,-50,238,74v-6,65,-102,105,-179,115v-77,-7,-152,-71,-101,-149v2,-5,24,-33,42,-40xm279,-120v14,-38,-47,-64,-85,-61v-20,-9,-41,7,-62,0v-11,7,-54,12,-66,24v0,20,-51,35,-38,66v-1,43,50,67,96,67v44,0,162,-55,155,-96xm157,-282v17,18,52,34,54,63v-24,12,-52,-36,-53,-29r-42,34v-23,-4,-6,-31,5,-34v1,1,27,-37,36,-34&quot;,w:273},&quot;&quot;:{d:&quot;231,-188v31,-74,91,-99,188,-116v28,1,6,39,1,51v-20,52,-100,91,-148,126v2,4,6,7,12,10v42,-42,181,-41,166,46v-1,8,-19,8,-28,5v-43,1,-168,42,-106,86v15,16,33,28,61,39v0,10,0,17,-6,22v-8,8,-35,26,-78,51v-52,7,-128,22,-154,-17v-23,-35,-99,-35,-117,-77v-29,-68,25,-149,75,-175v44,-23,89,5,135,13v14,-26,2,-39,-1,-64&quot;,w:461},&quot;Ò&quot;:{d:&quot;62,-184v78,-31,249,-50,238,74v-6,65,-102,105,-179,115v-77,-7,-152,-71,-101,-149v2,-5,24,-33,42,-40xm279,-120v14,-38,-47,-64,-85,-61v-20,-9,-41,7,-62,0v-11,7,-54,12,-66,24v0,20,-51,35,-38,66v-1,43,50,67,96,67v44,0,162,-55,155,-96xm161,-262v14,10,52,13,37,41v-28,-7,-62,-21,-100,-41v-3,-3,-3,-26,5,-24v16,5,42,17,58,24&quot;,w:273},&quot;Ú&quot;:{d:&quot;281,-202v6,67,-30,121,-71,152v-3,14,-47,26,-60,39v-41,20,-110,1,-125,-26v-24,-44,-28,-84,-8,-127v12,-26,23,-38,37,-22v-2,2,-3,5,-3,10v-34,26,-30,116,5,134v22,32,86,-1,109,-8v38,-28,104,-64,97,-149v2,-10,7,-8,19,-3xm194,-265v3,-1,11,4,11,6v3,12,-81,52,-89,54v-14,0,-13,-9,-12,-22&quot;,w:262},&quot;Û&quot;:{d:&quot;281,-202v6,67,-30,121,-71,152v-3,14,-47,26,-60,39v-41,20,-110,1,-125,-26v-24,-44,-28,-84,-8,-127v12,-26,23,-38,37,-22v-2,2,-3,5,-3,10v-34,26,-30,116,5,134v22,32,86,-1,109,-8v38,-28,104,-64,97,-149v2,-10,7,-8,19,-3xm150,-266v24,11,58,27,73,46v0,5,-3,6,-10,6v-28,2,-61,-30,-63,-25v-10,0,-57,40,-69,23v3,-10,-8,-15,8,-19v17,-1,34,-29,61,-31&quot;,w:262},&quot;Ù&quot;:{d:&quot;281,-202v6,67,-30,121,-71,152v-3,14,-47,26,-60,39v-41,20,-110,1,-125,-26v-24,-44,-28,-84,-8,-127v12,-26,23,-38,37,-22v-2,2,-3,5,-3,10v-34,26,-30,116,5,134v22,32,86,-1,109,-8v38,-28,104,-64,97,-149v2,-10,7,-8,19,-3xm151,-243v14,10,54,14,37,41v-28,-7,-61,-22,-99,-42v-3,-2,-4,-25,4,-23v16,5,42,17,58,24&quot;,w:262},&quot;ı&quot;:{d:&quot;43,-103v21,4,16,56,11,100v-7,2,-11,1,-20,-5v0,-7,-13,-18,-11,-25v4,-23,-3,-68,20,-70&quot;,w:80},&quot;ˆ&quot;:{d:&quot;144,-220v-29,0,-41,-27,-63,-39v-8,0,-11,5,-15,11v-17,12,-32,31,-54,13v-2,-5,-3,-9,-4,-14v20,-5,45,-33,64,-45v28,6,43,23,65,38v12,9,19,19,19,27v0,6,-4,9,-12,9&quot;,w:165},&quot;˜&quot;:{d:&quot;47,-300v26,-21,57,19,72,23v4,0,16,-5,36,-14v24,-10,22,-16,32,-13v3,12,-7,11,-7,23v-27,21,-48,32,-62,32v-3,2,-52,-27,-51,-31v-12,-2,-34,40,-54,33v-4,-13,-8,-18,1,-24v5,-7,16,-15,33,-29&quot;,w:186},&quot;¯&quot;:{d:&quot;63,-295v28,-7,73,10,105,7v11,1,6,8,5,19v-37,21,-72,11,-136,11v-23,0,-31,-14,-27,-36v12,-15,40,0,53,-1&quot;,w:183},&quot;˘&quot;:{d:&quot;65,-269v20,-11,45,-31,74,-36v20,30,-42,40,-59,66v-5,6,-11,8,-18,8v-8,-3,-45,-32,-51,-54v5,-24,14,-13,34,1&quot;,w:158},&quot;˙&quot;:{d:&quot;23,-302v15,-13,32,1,32,18v1,22,-36,29,-39,4v0,0,3,-7,7,-22&quot;,w:70},&quot;˚&quot;:{d:&quot;23,-225v-43,-24,-11,-85,41,-78v16,2,31,4,46,17v32,54,-41,86,-87,61xm33,-257v2,20,57,11,57,-6v0,-6,-11,-9,-33,-12v-14,-2,-24,13,-24,18&quot;,w:123},&quot;¸&quot;:{d:&quot;74,16v32,2,49,14,55,36v-3,7,-14,31,-29,33v-28,4,-57,11,-88,14v-19,-6,-13,-31,8,-33v20,-1,59,-5,73,-14v-17,-14,-68,8,-53,-37v9,-10,2,-28,24,-30v8,8,13,17,10,31&quot;,w:129},&quot;˝&quot;:{d:&quot;91,-249v15,-11,38,-53,57,-29v0,9,0,14,-3,23v-2,3,-20,22,-54,55v-5,5,-10,8,-16,8v-17,2,-6,-22,-7,-31v-1,0,-2,0,-4,1v-17,21,-29,31,-50,27v-5,-18,-3,-15,3,-27v23,-27,40,-46,48,-59v7,-12,31,3,29,9v-1,14,-3,24,-13,31v4,4,9,-1,10,-8&quot;,w:151},&quot;˛&quot;:{d:&quot;82,-5v-8,12,-16,55,-21,75v0,4,2,7,7,7v6,0,22,-7,50,-20v8,0,12,7,12,20v-2,22,-6,14,-27,30v-15,12,-26,16,-30,16v-47,-8,-59,-14,-56,-75v8,-27,12,-54,25,-77v19,-21,35,15,40,24&quot;,w:138},&quot;ˇ&quot;:{d:&quot;39,-286v33,46,63,-4,96,-16v6,0,9,6,9,19v0,24,-49,46,-77,46v-32,0,-52,-28,-59,-48v0,-25,23,-17,31,-1&quot;,w:153},&quot;\r&quot;:{w:179}}}),function(){&quot;use strict&quot;;</div><div class='line' id='LC7'>function AssertException(message){this.message=message}function assert(exp,message){if(!exp)throw new AssertException(message)}function getCenterX(box){return box.x+box.width/2}function getCenterY(box){return box.y+box.height/2}var DIAGRAM_MARGIN=10,ACTOR_MARGIN=10,ACTOR_PADDING=10,SIGNAL_MARGIN=5,SIGNAL_PADDING=5,NOTE_MARGIN=10,NOTE_PADDING=5,NOTE_OVERLAP=15,TITLE_MARGIN=0,TITLE_PADDING=5,SELF_SIGNAL_WIDTH=20,PLACEMENT=Diagram.PLACEMENT,LINETYPE=Diagram.LINETYPE,ARROWTYPE=Diagram.ARROWTYPE,LINE={stroke:&quot;#000&quot;,&quot;stroke-width&quot;:2},RECT={fill:&quot;#fff&quot;};AssertException.prototype.toString=function(){return&quot;AssertException: &quot;+this.message},String.prototype.trim||(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,&quot;&quot;)}),Raphael.fn.line=function(x1,y1,x2,y2){return assert(_.all([x1,x2,y1,y2],_.isFinite),&quot;x1,x2,y1,y2 must be numeric&quot;),this.path(&quot;M{0},{1} L{2},{3}&quot;,x1,y1,x2,y2)},Raphael.fn.wobble=function(x1,y1,x2,y2){assert(_.all([x1,x2,y1,y2],_.isFinite),&quot;x1,x2,y1,y2 must be numeric&quot;);var wobble=Math.sqrt((x2-x1)*(x2-x1)+(y2-y1)*(y2-y1))/25,r1=Math.random(),r2=Math.random(),xfactor=Math.random()&gt;.5?wobble:-wobble,yfactor=Math.random()&gt;.5?wobble:-wobble,p1={x:(x2-x1)*r1+x1+xfactor,y:(y2-y1)*r1+y1+yfactor},p2={x:(x2-x1)*r2+x1-xfactor,y:(y2-y1)*r2+y1-yfactor};return&quot;C&quot;+p1.x+&quot;,&quot;+p1.y+&quot; &quot;+p2.x+&quot;,&quot;+p2.y+&quot; &quot;+x2+&quot;,&quot;+y2},Raphael.fn.text_bbox=function(text,font){var p;font._obj?p=this.print_center(0,0,text,font._obj,font[&quot;font-size&quot;]):(p=this.text(0,0,text),p.attr(font));var bb=p.getBBox();return p.remove(),bb},Raphael.fn.handRect=function(x,y,w,h){return assert(_.all([x,y,w,h],_.isFinite),&quot;x, y, w, h must be numeric&quot;),this.path(&quot;M&quot;+x+&quot;,&quot;+y+this.wobble(x,y,x+w,y)+this.wobble(x+w,y,x+w,y+h)+this.wobble(x+w,y+h,x,y+h)+this.wobble(x,y+h,x,y)).attr(RECT)},Raphael.fn.handLine=function(x1,y1,x2,y2){return assert(_.all([x1,x2,y1,y2],_.isFinite),&quot;x1,x2,y1,y2 must be numeric&quot;),this.path(&quot;M&quot;+x1+&quot;,&quot;+y1+this.wobble(x1,y1,x2,y2))},Raphael.fn.print_center=function(x,y,string,font,size,letter_spacing){var path=this.print(x,y,string,font,size,&quot;baseline&quot;,letter_spacing),bb=path.getBBox(),dx=x-bb.x-bb.width/2,dy=y-bb.y-bb.height/2,m=new Raphael.matrix;return m.translate(dx,dy),path.attr(&quot;path&quot;,Raphael.mapPath(path.attr(&quot;path&quot;),m))};var BaseTheme=function(diagram){this.init(diagram)};_.extend(BaseTheme.prototype,{init:function(diagram){this.diagram=diagram,this._paper=void 0,this._font=void 0,this._title=void 0,this._actors_height=0,this._signals_height=0;var a=this.arrow_types={};a[ARROWTYPE.FILLED]=&quot;block&quot;,a[ARROWTYPE.OPEN]=&quot;open&quot;;var l=this.line_types={};l[LINETYPE.SOLID]=&quot;&quot;,l[LINETYPE.DOTTED]=&quot;-&quot;},init_paper:function(container){this._paper=new Raphael(container,320,200)},init_font:function(){},draw_line:function(x1,y1,x2,y2){return this._paper.line(x1,y1,x2,y2)},draw_rect:function(x,y,w,h){return this._paper.rect(x,y,w,h)},draw:function(container){var diagram=this.diagram;this.init_paper(container),this.init_font(),this.layout();var title_height=this._title?this._title.height:0;this._paper.setStart(),this._paper.setSize(diagram.width,diagram.height);var y=DIAGRAM_MARGIN+title_height;this.draw_title(),this.draw_actors(y),this.draw_signals(y+this._actors_height),this._paper.setFinish()},layout:function(){function actor_ensure_distance(a,b,d){assert(b&gt;a,&quot;a must be less than or equal to b&quot;),0&gt;a?(b=actors[b],b.x=Math.max(d-b.width/2,b.x)):b&gt;=actors.length?(a=actors[a],a.padding_right=Math.max(d,a.padding_right)):(a=actors[a],a.distances[b]=Math.max(d,a.distances[b]?a.distances[b]:0))}var diagram=this.diagram,paper=this._paper,font=this._font,actors=diagram.actors,signals=diagram.signals;if(diagram.width=0,diagram.height=0,diagram.title){var title=this._title={},bb=paper.text_bbox(diagram.title,font);title.text_bb=bb,title.message=diagram.title,title.width=bb.width+2*(TITLE_PADDING+TITLE_MARGIN),title.height=bb.height+2*(TITLE_PADDING+TITLE_MARGIN),title.x=DIAGRAM_MARGIN,title.y=DIAGRAM_MARGIN,diagram.width+=title.width,diagram.height+=title.height}_.each(actors,function(a){var bb=paper.text_bbox(a.name,font);a.text_bb=bb,a.x=0,a.y=0,a.width=bb.width+2*(ACTOR_PADDING+ACTOR_MARGIN),a.height=bb.height+2*(ACTOR_PADDING+ACTOR_MARGIN),a.distances=[],a.padding_right=0,this._actors_height=Math.max(a.height,this._actors_height)},this),_.each(signals,function(s){var a,b,bb=paper.text_bbox(s.message,font);s.text_bb=bb,s.width=bb.width,s.height=bb.height;var extra_width=0;if(&quot;Signal&quot;==s.type)s.width+=2*(SIGNAL_MARGIN+SIGNAL_PADDING),s.height+=2*(SIGNAL_MARGIN+SIGNAL_PADDING),s.isSelf()?(a=s.actorA.index,b=a+1,s.width+=SELF_SIGNAL_WIDTH):(a=Math.min(s.actorA.index,s.actorB.index),b=Math.max(s.actorA.index,s.actorB.index));else{if(&quot;Note&quot;!=s.type)throw new Error(&quot;Unhandled signal type:&quot;+s.type);if(s.width+=2*(NOTE_MARGIN+NOTE_PADDING),s.height+=2*(NOTE_MARGIN+NOTE_PADDING),extra_width=2*ACTOR_MARGIN,s.placement==PLACEMENT.LEFTOF)b=s.actor.index,a=b-1;else if(s.placement==PLACEMENT.RIGHTOF)a=s.actor.index,b=a+1;else if(s.placement==PLACEMENT.OVER&amp;&amp;s.hasManyActors())a=Math.min(s.actor[0].index,s.actor[1].index),b=Math.max(s.actor[0].index,s.actor[1].index),extra_width=-(2*NOTE_PADDING+2*NOTE_OVERLAP);else if(s.placement==PLACEMENT.OVER)return a=s.actor.index,actor_ensure_distance(a-1,a,s.width/2),actor_ensure_distance(a,a+1,s.width/2),this._signals_height+=s.height,void 0}actor_ensure_distance(a,b,s.width+extra_width),this._signals_height+=s.height},this);var actors_x=0;return _.each(actors,function(a){a.x=Math.max(actors_x,a.x),_.each(a.distances,function(distance,b){&quot;undefined&quot;!=typeof distance&amp;&amp;(b=actors[b],distance=Math.max(distance,a.width/2,b.width/2),b.x=Math.max(b.x,a.x+a.width/2+distance-b.width/2))}),actors_x=a.x+a.width+a.padding_right},this),diagram.width=Math.max(actors_x,diagram.width),diagram.width+=2*DIAGRAM_MARGIN,diagram.height+=2*DIAGRAM_MARGIN+2*this._actors_height+this._signals_height,this},draw_title:function(){var title=this._title;title&amp;&amp;this.draw_text_box(title,title.message,TITLE_MARGIN,TITLE_PADDING,this._font)},draw_actors:function(offsetY){var y=offsetY;_.each(this.diagram.actors,function(a){this.draw_actor(a,y,this._actors_height),this.draw_actor(a,y+this._actors_height+this._signals_height,this._actors_height);var aX=getCenterX(a),line=this.draw_line(aX,y+this._actors_height-ACTOR_MARGIN,aX,y+this._actors_height+ACTOR_MARGIN+this._signals_height);line.attr(LINE)},this)},draw_actor:function(actor,offsetY,height){actor.y=offsetY,actor.height=height,this.draw_text_box(actor,actor.name,ACTOR_MARGIN,ACTOR_PADDING,this._font)},draw_signals:function(offsetY){var y=offsetY;_.each(this.diagram.signals,function(s){&quot;Signal&quot;==s.type?s.isSelf()?this.draw_self_signal(s,y):this.draw_signal(s,y):&quot;Note&quot;==s.type&amp;&amp;this.draw_note(s,y),y+=s.height},this)},draw_self_signal:function(signal,offsetY){assert(signal.isSelf(),&quot;signal must be a self signal&quot;);var text_bb=signal.text_bb,aX=getCenterX(signal.actorA),x=aX+SELF_SIGNAL_WIDTH+SIGNAL_PADDING-text_bb.x,y=offsetY+signal.height/2;this.draw_text(x,y,signal.message,this._font);var line,attr=_.extend({},LINE,{&quot;stroke-dasharray&quot;:this.line_types[signal.linetype]}),y1=offsetY+SIGNAL_MARGIN,y2=y1+signal.height-SIGNAL_MARGIN;line=this.draw_line(aX,y1,aX+SELF_SIGNAL_WIDTH,y1),line.attr(attr),line=this.draw_line(aX+SELF_SIGNAL_WIDTH,y1,aX+SELF_SIGNAL_WIDTH,y2),line.attr(attr),line=this.draw_line(aX+SELF_SIGNAL_WIDTH,y2,aX,y2),attr[&quot;arrow-end&quot;]=this.arrow_types[signal.arrowtype]+&quot;-wide-long&quot;,line.attr(attr)},draw_signal:function(signal,offsetY){var aX=getCenterX(signal.actorA),bX=getCenterX(signal.actorB),x=(bX-aX)/2+aX,y=offsetY+SIGNAL_MARGIN+2*SIGNAL_PADDING;this.draw_text(x,y,signal.message,this._font),y=offsetY+signal.height-SIGNAL_MARGIN-SIGNAL_PADDING;var line=this.draw_line(aX,y,bX,y);line.attr(LINE),line.attr({&quot;arrow-end&quot;:this.arrow_types[signal.arrowtype]+&quot;-wide-long&quot;,&quot;stroke-dasharray&quot;:this.line_types[signal.linetype]})},draw_note:function(note,offsetY){note.y=offsetY;var actorA=note.hasManyActors()?note.actor[0]:note.actor,aX=getCenterX(actorA);switch(note.placement){case PLACEMENT.RIGHTOF:note.x=aX+ACTOR_MARGIN;break;case PLACEMENT.LEFTOF:note.x=aX-ACTOR_MARGIN-note.width;break;case PLACEMENT.OVER:if(note.hasManyActors()){var bX=getCenterX(note.actor[1]),overlap=NOTE_OVERLAP+NOTE_PADDING;note.x=aX-overlap,note.width=bX+overlap-note.x}else note.x=aX-note.width/2;break;default:throw new Error(&quot;Unhandled note placement:&quot;+note.placement)}this.draw_text_box(note,note.message,NOTE_MARGIN,NOTE_PADDING,this._font)},draw_text:function(x,y,text,font){var t,paper=this._paper,f=font||{};f._obj?t=paper.print_center(x,y,text,f._obj,f[&quot;font-size&quot;]):(t=paper.text(x,y,text),t.attr(f));var bb=t.getBBox(),r=paper.rect(bb.x,bb.y,bb.width,bb.height);r.attr({fill:&quot;#fff&quot;,stroke:&quot;none&quot;}),t.toFront()},draw_text_box:function(box,text,margin,padding,font){var x=box.x+margin,y=box.y+margin,w=box.width-2*margin,h=box.height-2*margin,rect=this.draw_rect(x,y,w,h);rect.attr(LINE),x=getCenterX(box),y=getCenterY(box),this.draw_text(x,y,text,font)}});var RaphaëlTheme=function(diagram){this.init(diagram)};_.extend(RaphaëlTheme.prototype,BaseTheme.prototype,{init_font:function(){this._font={&quot;font-size&quot;:16,&quot;font-family&quot;:&quot;Andale Mono, monospace&quot;}}});var HandRaphaëlTheme=function(diagram){this.init(diagram)};_.extend(HandRaphaëlTheme.prototype,BaseTheme.prototype,{init_font:function(){this._font={&quot;font-size&quot;:16,&quot;font-family&quot;:&quot;daniel&quot;},this._font._obj=this._paper.getFont(&quot;daniel&quot;)},draw_line:function(x1,y1,x2,y2){return this._paper.handLine(x1,y1,x2,y2)},draw_rect:function(x,y,w,h){return this._paper.handRect(x,y,w,h)}});var themes={simple:RaphaëlTheme,hand:HandRaphaëlTheme};Diagram.prototype.drawSVG=function(container,options){var default_options={theme:&quot;hand&quot;};if(options=_.defaults(options||{},default_options),!(options.theme in themes))throw new Error(&quot;Unsupported theme: &quot;+options.theme);var drawing=new themes[options.theme](this);drawing.draw(container)}}();</div><div class='line' id='LC8'>//# sourceMappingURL=build/sequence-diagram-min.js.map</div>
            </td>
          </tr>
        </table>
  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/">
      <span class="mega-octicon octicon-mark-github"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2013 <span title="0.06508s from github-fe118-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
          <div class="suggester-container">
              <div class="suggester fullscreen-suggester js-navigation-container" id="fullscreen_suggester"
                 data-url="/bramp/js-sequence-diagrams/suggestions/commit">
              </div>
          </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped leftwards" title="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped leftwards"
      title="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-remove-close close ajax-error-dismiss"></a>
      Something went wrong with that request. Please try again.
    </div>

  </body>
</html>

