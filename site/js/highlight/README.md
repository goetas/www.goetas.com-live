<h1 id="highlight.js">Highlight.js</h1>

<p><a href="https://travis-ci.org/isagalaev/highlight.js"><img src="https://travis-ci.org/isagalaev/highlight.js.svg?branch=master" alt="Build Status" /></a></p>

<p>Highlight.js is a syntax highlighter written in JavaScript. It works in
the browser as well as on the server. It works with pretty much any
markup, doesn’t depend on any framework and has automatic language
detection.</p>

<h2 id="getting-started">Getting Started</h2>

<p>The bare minimum for using highlight.js on a web page is linking to the
library along with one of the styles and calling
<a href="http://highlightjs.readthedocs.io/en/latest/api.html#inithighlightingonload"><code>initHighlightingOnLoad</code></a>:</p>

<pre><code class="html">&lt;link rel="stylesheet" href="/path/to/styles/default.css"&gt;
&lt;script src="/path/to/highlight.pack.js"&gt;&lt;/script&gt;
&lt;script&gt;hljs.initHighlightingOnLoad();&lt;/script&gt;
</code></pre>

<p>This will find and highlight code inside of <code>&lt;pre&gt;&lt;code&gt;</code> tags; it tries
to detect the language automatically. If automatic detection doesn’t
work for you, you can specify the language in the <code>class</code> attribute:</p>

<pre><code class="html">&lt;pre&gt;&lt;code class="html"&gt;...&lt;/code&gt;&lt;/pre&gt;
</code></pre>

<p>The list of supported language classes is available in the <a href="http://highlightjs.readthedocs.io/en/latest/css-classes-reference.html">class
reference</a>.  Classes can also be prefixed with either <code>language-</code> or
<code>lang-</code>.</p>

<p>To disable highlighting altogether use the <code>nohighlight</code> class:</p>

<pre><code class="html">&lt;pre&gt;&lt;code class="nohighlight"&gt;...&lt;/code&gt;&lt;/pre&gt;
</code></pre>

<h2 id="custom-initialization">Custom Initialization</h2>

<p>When you need a bit more control over the initialization of
highlight.js, you can use the <a href="http://highlightjs.readthedocs.io/en/latest/api.html#highlightblock-block"><code>highlightBlock</code></a> and <a href="http://highlightjs.readthedocs.io/en/latest/api.html#configure-options"><code>configure</code></a>
functions. This allows you to control <em>what</em> to highlight and <em>when</em>.</p>

<p>Here’s an equivalent way to calling <a href="http://highlightjs.readthedocs.io/en/latest/api.html#inithighlightingonload"><code>initHighlightingOnLoad</code></a> using
jQuery:</p>

<pre><code class="javascript">$(document).ready(function() {
  $('pre code').each(function(i, block) {
    hljs.highlightBlock(block);
  });
});
</code></pre>

<p>You can use any tags instead of <code>&lt;pre&gt;&lt;code&gt;</code> to mark up your code. If
you don't use a container that preserve line breaks you will need to
configure highlight.js to use the <code>&lt;br&gt;</code> tag:</p>

<pre><code class="javascript">hljs.configure({useBR: true});

$('div.code').each(function(i, block) {
  hljs.highlightBlock(block);
});
</code></pre>

<p>For other options refer to the documentation for <a href="http://highlightjs.readthedocs.io/en/latest/api.html#configure-options"><code>configure</code></a>.</p>

<h2 id="web-workers">Web Workers</h2>

<p>You can run highlighting inside a web worker to avoid freezing the browser
window while dealing with very big chunks of code.</p>

<p>In your main script:</p>

<pre><code class="javascript">addEventListener('load', function() {
  var code = document.querySelector('#code');
  var worker = new Worker('worker.js');
  worker.onmessage = function(event) { code.innerHTML = event.data; }
  worker.postMessage(code.textContent);
})
</code></pre>

<p>In worker.js:</p>

<pre><code class="javascript">onmessage = function(event) {
  importScripts('&lt;path&gt;/highlight.pack.js');
  var result = self.hljs.highlightAuto(event.data);
  postMessage(result.value);
}
</code></pre>

<h2 id="getting-the-library">Getting the Library</h2>

<p>You can get highlight.js as a hosted, or custom-build, browser script or
as a server module. Right out of the box the browser script supports
both AMD and CommonJS, so if you wish you can use RequireJS or
Browserify without having to build from source. The server module also
works perfectly fine with Browserify, but there is the option to use a
build specific to browsers rather than something meant for a server.
Head over to the <a href="https://highlightjs.org/download/">download page</a> for all the options.</p>

<p><strong>Don't link to GitHub directly.</strong> The library is not supposed to work straight
from the source, it requires building. If none of the pre-packaged options
work for you refer to the <a href="http://highlightjs.readthedocs.io/en/latest/building-testing.html">building documentation</a>.</p>

<p><strong>The CDN-hosted package doesn't have all the languages.</strong> Otherwise it'd be
too big. If you don't see the language you need in the <a href="https://highlightjs.org/download/">"Common" section</a>,
it can be added manually:</p>

<pre><code class="html">&lt;script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.4.0/languages/go.min.js"&gt;&lt;/script&gt;
</code></pre>

<p><strong>On Almond.</strong> You need to use the optimizer to give the module a name. For
example:</p>

<pre><code>r.js -o name=hljs paths.hljs=/path/to/highlight out=highlight.js
</code></pre>

<h2 id="license">License</h2>

<p>Highlight.js is released under the BSD License. See <a href="https://github.com/isagalaev/highlight.js/blob/master/LICENSE">LICENSE</a> file
for details.</p>

<h2 id="links">Links</h2>

<p>The official site for the library is at <a href="https://highlightjs.org/">https://highlightjs.org/</a>.</p>

<p>Further in-depth documentation for the API and other topics is at
<a href="http://highlightjs.readthedocs.io/">http://highlightjs.readthedocs.io/</a>.</p>

<p>Authors and contributors are listed in the <a href="https://github.com/isagalaev/highlight.js/blob/master/AUTHORS.en.txt">AUTHORS.en.txt</a> file.</p>
