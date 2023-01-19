<h1 id="highlight.js">Highlight.js</h1>

<p>Highlight.js — это инструмент для подсветки синтаксиса, написанный на JavaScript. Он работает
и в браузере, и на сервере. Он работает с практически любой HTML разметкой, не
зависит от каких-либо фреймворков и умеет автоматически определять язык.</p>

<h2 id="%D0%9D%D0%B0%D1%87%D0%B0%D0%BB%D0%BE-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%8B">Начало работы</h2>

<p>Минимум, что нужно сделать для использования highlight.js на веб-странице — это
подключить библиотеку, CSS-стили и вызывать <a href="http://highlightjs.readthedocs.io/en/latest/api.html#inithighlightingonload"><code>initHighlightingOnLoad</code></a>:</p>

<pre><code class="html">&lt;link rel="stylesheet" href="/path/to/styles/default.css"&gt;
&lt;script src="/path/to/highlight.pack.js"&gt;&lt;/script&gt;
&lt;script&gt;hljs.initHighlightingOnLoad();&lt;/script&gt;
</code></pre>

<p>Библиотека найдёт и раскрасит код внутри тегов <code>&lt;pre&gt;&lt;code&gt;</code>, попытавшись
автоматически определить язык. Когда автоопределение не срабатывает, можно явно
указать язык в атрибуте class:</p>

<pre><code class="html">&lt;pre&gt;&lt;code class="html"&gt;...&lt;/code&gt;&lt;/pre&gt;
</code></pre>

<p>Список поддерживаемых классов языков доступен в <a href="http://highlightjs.readthedocs.io/en/latest/css-classes-reference.html">справочнике по классам</a>.
Класс также можно предварить префиксами <code>language-</code> или <code>lang-</code>.</p>

<p>Чтобы отключить подсветку для какого-то блока, используйте класс <code>nohighlight</code>:</p>

<pre><code class="html">&lt;pre&gt;&lt;code class="nohighlight"&gt;...&lt;/code&gt;&lt;/pre&gt;
</code></pre>

<h2 id="%D0%98%D0%BD%D0%B8%D1%86%D0%B8%D0%B0%D0%BB%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D1%8F-%D0%B2%D1%80%D1%83%D1%87%D0%BD%D1%83%D1%8E">Инициализация вручную</h2>

<p>Чтобы иметь чуть больше контроля за инициализацией подсветки, вы можете
использовать функции <a href="http://highlightjs.readthedocs.io/en/latest/api.html#highlightblock-block"><code>highlightBlock</code></a> и <a href="http://highlightjs.readthedocs.io/en/latest/api.html#configure-options"><code>configure</code></a>. Таким образом
можно управлять тем, <em>что</em> и <em>когда</em> подсвечивать.</p>

<p>Вот пример инициализации, эквивалентной вызову <a href="http://highlightjs.readthedocs.io/en/latest/api.html#inithighlightingonload"><code>initHighlightingOnLoad</code></a>, но
с использованием jQuery:</p>

<pre><code class="javascript">$(document).ready(function() {
  $('pre code').each(function(i, block) {
    hljs.highlightBlock(block);
  });
});
</code></pre>

<p>Вы можете использовать любые теги разметки вместо <code>&lt;pre&gt;&lt;code&gt;</code>. Если
используете контейнер, не сохраняющий переводы строк, вам нужно сказать
highlight.js использовать для них тег <code>&lt;br&gt;</code>:</p>

<pre><code class="javascript">hljs.configure({useBR: true});

$('div.code').each(function(i, block) {
  hljs.highlightBlock(block);
});
</code></pre>

<p>Другие опции можно найти в документации функции <a href="http://highlightjs.readthedocs.io/en/latest/api.html#configure-options"><code>configure</code></a>.</p>

<h2 id="web-workers">Web Workers</h2>

<p>Подсветку можно запустить внутри web worker'а, чтобы окно
браузера не подтормаживало при работе с большими кусками кода.</p>

<p>В основном скрипте:</p>

<pre><code class="javascript">addEventListener('load', function() {
  var code = document.querySelector('#code');
  var worker = new Worker('worker.js');
  worker.onmessage = function(event) { code.innerHTML = event.data; }
  worker.postMessage(code.textContent);
})
</code></pre>

<p>В worker.js:</p>

<pre><code class="javascript">onmessage = function(event) {
  importScripts('&lt;path&gt;/highlight.pack.js');
  var result = self.hljs.highlightAuto(event.data);
  postMessage(result.value);
}
</code></pre>

<h2 id="%D0%A3%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BA%D0%B0-%D0%B1%D0%B8%D0%B1%D0%BB%D0%B8%D0%BE%D1%82%D0%B5%D0%BA%D0%B8">Установка библиотеки</h2>

<p>Highlight.js можно использовать в браузере прямо с CDN хостинга или скачать
индивидуальную сборку, а также установив модуль на сервере. На
<a href="https://highlightjs.org/download/">странице загрузки</a> подробно описаны все варианты.</p>

<p><strong>Не подключайте GitHub напрямую.</strong> Библиотека не предназначена для
использования в виде исходного кода, а требует отдельной сборки. Если вам не
подходит ни один из готовых вариантов, читайте <a href="http://highlightjs.readthedocs.io/en/latest/building-testing.html">документацию по сборке</a>.</p>

<p><strong>Файл на CDN содержит не все языки.</strong> Иначе он будет слишком большого размера.
Если нужного вам языка нет в <a href="https://highlightjs.org/download/">категории "Common"</a>, можно дообавить его
вручную:</p>

<pre><code class="html">&lt;script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.4.0/languages/go.min.js"&gt;&lt;/script&gt;
</code></pre>

<p><strong>Про Almond.</strong> Нужно задать имя модуля в оптимизаторе, например:</p>

<pre><code>r.js -o name=hljs paths.hljs=/path/to/highlight out=highlight.js
</code></pre>

<h2 id="%D0%9B%D0%B8%D1%86%D0%B5%D0%BD%D0%B7%D0%B8%D1%8F">Лицензия</h2>

<p>Highlight.js распространяется под лицензией BSD. Подробнее читайте файл
<a href="https://github.com/isagalaev/highlight.js/blob/master/LICENSE">LICENSE</a>.</p>

<h2 id="%D0%A1%D1%81%D1%8B%D0%BB%D0%BA%D0%B8">Ссылки</h2>

<p>Официальный сайт билиотеки расположен по адресу <a href="https://highlightjs.org/">https://highlightjs.org/</a>.</p>

<p>Более подробная документация по API и другим темам расположена на
<a href="http://highlightjs.readthedocs.io/">http://highlightjs.readthedocs.io/</a>.</p>

<p>Авторы и контрибьюторы перечислены в файле <a href="https://github.com/isagalaev/highlight.js/blob/master/AUTHORS.ru.txt">AUTHORS.ru.txt</a> file.</p>
