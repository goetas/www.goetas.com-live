<h2 id="subresource-integrity">Subresource Integrity</h2>

<p>If you are loading Highlight.js via CDN you may wish to use <a href="https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity">Subresource Integrity</a> to guarantee that you are using a legimitate build of the library.</p>

<p>To do this you simply need to add the <code>integrity</code> attribute for each JavaScript file you download via CDN. These digests are used by the browser to confirm the files downloaded have not been modified.</p>

<pre><code class="html">&lt;script
  src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.1/highlight.min.js"
  integrity="sha384-5xdYoZ0Lt6Jw8GFfRP91J0jaOVUq7DGI1J5wIyNi0D+eHVdfUwHR4gW6kPsw489E"&gt;&lt;/script&gt;
&lt;!-- including any other grammars you might need to load --&gt;
&lt;script
  src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.1/languages/go.min.js"
  integrity="sha384-HdearVH8cyfzwBIQOjL/6dSEmZxQ5rJRezN7spps8E7iu+R6utS8c2ab0AgBNFfH"&gt;&lt;/script&gt;
</code></pre>

<p>The full list of digests for every file can be found below.</p>

<h3 id="digests">Digests</h3>

<pre><code>sha384-G3c8SNZYjR6jFPYkQxQDgYhzlaj4olCEySxxCnqKYBz3jcHODQ+RZQyyFGnM6ZTM /es/languages/accesslog.js
sha384-UetTFEKURO3tHQVj0YC0xP9Lo84vGmqippXzOpf96Awpk5fTIJ1lrKDBZWj5LqXa /es/languages/accesslog.min.js
sha384-gRTR/fmk+6+ygbihH/fJvHgmffnOrd/eO7DW5zgu1uN9GBohtDx+OBs0DI0ejigB /es/languages/bash.js
sha384-Pg7b9hYE6kefjcNqAabhv8jOLCVoZubUaM4bZFjUJd0CaaQ14ksDI0GVllMtAF4S /es/languages/bash.min.js
sha384-Gmvct15f4Mo9AXQG5bk5w78N1YjBLXXU3KIV7no+mOVnApXlwfw1dwjfueAwljIV /es/languages/css.js
sha384-1D7DbOic0Z5nM2ldSO9O/EsBfsg/5x7X7So1qnMgscI2ucDevptcg7cTvrD9rL0D /es/languages/css.min.js
sha384-GjF+59AA+OY/6RDsvWxm3u318l0CruHb/Fm3oywrHZWho96FKyPUFnoIKqCKiM4D /es/languages/dockerfile.js
sha384-qyGdaK2usg+DEmSJUcr3Rogi6miy7A1Rn8QlRc71wBlMHpN1Y4b3d8hh2hf31dCu /es/languages/dockerfile.min.js
sha384-uC39e4pRTIrenlpo9NQf2taOPhdRJNaZLFASSg+Q8BLjYqLXvxL8brjzQmJEQ0qn /es/languages/http.js
sha384-36ZwsK42N/jk3DquJeJr/r/oziBOtUxBcg0ZdTaaEDX+Zo/UMgBP4S2Sf4NEyq1y /es/languages/http.min.js
sha384-vZWLk+C+23/W/GAmv4PXkZSZo82LXul6DdSgWcMzutPxGltitIk38HyLrxRVsFvm /es/languages/ini.js
sha384-CVynu7LzwkkAUiajSi0jprssYhgg9Vi1WSd8iR84Vmi6JdRGq3DT4vvEfjzoxxOK /es/languages/ini.min.js
sha384-lk+aAr+DNq8Rz3hXPSZ7ga38GS+tQfXDvexuUnyDCSju1t1SAsLipVIFGlRtcUjE /es/languages/java.js
sha384-5GpB6kfA2w03pZhAUmmNSYvR5pLvne/Rzqc22BmHv+t9ES7ifMX/ZE7x5TBeqW4d /es/languages/java.min.js
sha384-g7t9fKR5Tvod4iWv7BQXN+/JMn5GT9sD6FG3h7Fgl+KCv5k4NnnCzEqUe7BMJ9Mv /es/languages/javascript.js
sha384-f7huPivS1dV2T5V+g0aJpgsY7WBHWCsioIq30tpNoXGizD65fWJYGuXXVPNI52VB /es/languages/javascript.min.js
sha384-8CRS96Xb/ZkZlQU+5ffA03XTN6/xY40QAnsXKB0Y+ow1vza1LAkRNPSrZqGSNo53 /es/languages/json.js
sha384-UHzaYxI/rAo84TEK3WlG15gVfPk49XKax76Ccn9qPWYbUxePCEHxjGkV+xp9HcS/ /es/languages/json.min.js
sha384-LRBDaxnf3ea3MTosn2yHFNe+ECfow/i4s71k6UdzkNOS1QvgHkcqRBTkDZC5aEoP /es/languages/less.js
sha384-EJ7n9HlCUKgtcBomJlrocJe2M2WegUc2r/TqymQdykuxcLeA25bQ5665qN58BWki /es/languages/less.min.js
sha384-gXOyhc1mLm8alPswShRUsxnBadQf2AOcdpmFVqkKSZBNS07kTOHb3DDepD3Rf9eH /es/languages/makefile.js
sha384-iagI2W32nmVJq2EVd59zlgz2bFjR/MC0JRsbcFaeZL2gmvHzzOeyRTpTKGBSKd7q /es/languages/makefile.min.js
sha384-+KkqXkoHKtuOmUzhZ0BjyV0qjljnS+z6i4fELMEg5brFPtmDIog4zZMhylaBTsVi /es/languages/markdown.js
sha384-E7UvgBH6skA1FIOcn3B2c68GtJzrmZlOOC5p/fsxwihTZG/bBedJZu5PC1+kGX7q /es/languages/markdown.min.js
sha384-V1naTapX08eXbOlk/ff334/j1cqIcSKIL8iFF7fabEzwo0662EJWXaMPDMMdyXZ/ /es/languages/nginx.js
sha384-7QaPTK4CkHm5HP+HbJ7BwALXSAvCln1ofcgr0Myla2I3O6cU/pupqPnajKmyy03P /es/languages/nginx.min.js
sha384-4OPZSHQbxzPqFMOXnndxQ6TZTI/B+J4W9aqTCHxAx/dsPS6GG25kT7wdsf66jJ1M /es/languages/php.js
sha384-VxmvZ2mUpp1EzFijS40RFvIc7vbv/d5PhMxVFG/3HMpVKD4sVvhdV9LThrJDiw9e /es/languages/php.min.js
sha384-u+MTmTVAaTh80p8KqK/40adBzVQggUwUCLOqLFPd2pqUQDPRpY1h7MvqyTnuZIyq /es/languages/puppet.js
sha384-cnQI2r99QCtySILFW0UrIc7GsjgLgMqTA4DDvNXT8MIFv6R0FnIXgtvXZ4B9djD3 /es/languages/puppet.min.js
sha384-R67rULqIohpEyV6aFbjxRv7xhK8v/KteX4cvOFmPcnZ2MTf65Zua+2DzB9MqqXuO /es/languages/scss.js
sha384-WMy5VYgOMFAnHhPJXVDCQ/Y/QPlUrBqNVPtFH6/gGg2F4uaAowyQ0y/9zWEeGpJe /es/languages/scss.min.js
sha384-s1ZfN6xtlNKAZux8QYAG7upUsit3RwK5XDoCAN3g6Kj33RrIqbmkuGjdNF9RvzPM /es/languages/sql.js
sha384-y25cn06synxhYnlKVprZdpakuFWVrm2jvn8pqiF4L85a05CI/6bNeT2+qXbUYIyW /es/languages/sql.min.js
sha384-bi3BqA3VYElINJkx75FVmJsFngvcscHin3x406SrIaNHJo3oS0evVU94gAgiz8y8 /es/languages/twig.js
sha384-xx69PXqN0VBmdg5u/nxD+yHl24nb3B+/kAbMwwo5CF7mWQCHvlJ57zUYRRosjRSS /es/languages/twig.min.js
sha384-Z61gsCS2W7Q+3fT1fdya/Sz4wlmsotT9iEGzgIlNqP0soaKH1NzysutxWp08Hh3E /es/languages/typescript.js
sha384-Tv4mr9B7b+x2IynRXW/xcAxUj1+AoN9zyp0n9BWE1Nle3Zfm/zUeEztNLhIRjgE7 /es/languages/typescript.min.js
sha384-9ECFzM+oWDye4s/MFx3QUXGo4mW43+SyLpWUDeQtWup6GZJ+KHFxVS89PmZt/fzl /es/languages/xml.js
sha384-PQrsaWeWrBiE1CFRw8K335CaJuQRTjDGm73vn8bXvlwaw6RyqWObdvMTBS8B75NN /es/languages/xml.min.js
sha384-7HTgKp/l2rzlyrh5vUfbfZVy+Wx1lKO4iGmfqvakienApv21u55lo+Vi+iVg4jY0 /es/languages/yaml.js
sha384-4smueUtgWTorlNLbaQIawnVCcIAuw82NetPOGWN5PbZT/pMr0rjvZXj0EUzJV1nr /es/languages/yaml.min.js
sha384-clX8n3JXaeM32WCfxwSNtf4Gh5OBuZEuA+VyvJEtUxXqpi5ZAWjv3uEITAEtCIVC /languages/accesslog.js
sha384-NAVE+aGPjSXIrt5LxakpP2qnE9khMpJfJFR7b9TswZOT6fH+aWUuvau1dvad0eF/ /languages/accesslog.min.js
sha384-Jrkpn2hK0TY04skYBXB9fj7mMpKYy7g726cPwXGXf6mdBXnFlTDXFduxikMCRXT7 /languages/bash.js
sha384-BbT8tZtvkh8HPXIvL5RtzuljBwI3gR5KIdYxZyYSyI5C/+KNAGdzAiexvmxuroag /languages/bash.min.js
sha384-bsb3QmLtUiyaiHwtrL4YoAVI9yLsjyqxgoAsk4Zd+ass9rSK1WWRiCDSu/hm8QRp /languages/css.js
sha384-0XGvxIU7Oq1DQMMBr1ORiozzBq3KpZPE/74mJysWRBAop1dZ9Ioq/qRWe8u30Ded /languages/css.min.js
sha384-PF6NlDjoIfHgP6/hbKDRAswvI+dXitquVNX3GAJapyiu+AcQcdicRXJjIp8bj6pM /languages/dockerfile.js
sha384-hly+Rz036+A3/domxShxHoja13X3lfx8nyG3V8aMeOe7Efwu6gUaSrDxq9BKwYk4 /languages/dockerfile.min.js
sha384-hV7ok3wrc7DrjvcAtn3jI6KlZtpbm+hC4HXrOyRjrl65HjGtTJ5ixGiMSpJRDiDq /languages/http.js
sha384-X50fiL5mByDvJRwn0hkUXIEttF5t8hlEFSPUMq42KoryxgI4niflBsviuhahhWJf /languages/http.min.js
sha384-izwcylRNWmKKRcyCyrYZyNQekUCyR7Fh1x8nYWNCRJoRDU5JXv6TcqlP4C+4MfIf /languages/ini.js
sha384-NrmnsdarwteQHPGjt70kaQTi1KE0XfOJNX9/VJSg6wWwU6U2nPzjl3iWkgU1cvyx /languages/ini.min.js
sha384-Dprg6CdFFkimxaHg7qM7njVaWLMlOLqughixPERBDbm0cHdX6rKujTnJReof8O6m /languages/java.js
sha384-e+59xEZvRMXSRGD31B3HOBGAGqhhs+bbkxCqPuJDkSX5QGneIGTIfwdYJckTN3AO /languages/java.min.js
sha384-yxv7Fv9ToggiLsR67t98hV5ZRup6XX6xL1Rkbi/cGV5J8y7fosCi9POqlBkiBWFg /languages/javascript.js
sha384-tPOrIubtDHoQU7Rqw0o88ilthGO0/4xEZGB47XrQKWhrc1/SchwsDx+AP74u4nk0 /languages/javascript.min.js
sha384-pUlqdjoNePvHvdi7GVKJJnh/P2T3EvXXodl5j0JtTkbNC4DRH7gwGbcHFa84bFOP /languages/json.js
sha384-3C+cPClJZgjKFYAb0bh35D7im2jasLzgk9eRix3t1c5pk1+x6b+bHghWcdrKwIo3 /languages/json.min.js
sha384-KSqRjSg7Nn1FuuRUtjB7br82XVgWtqos5H9BlvRY1j5YQr2lftIUSg5deukqK89p /languages/less.js
sha384-M7Wfa4KRyfGnn1i52Nqpr5zWcrmVaO0luxCB+2Txz1eI2FRQfpDcNimn1f86K2Cp /languages/less.min.js
sha384-NpIMNHXY0x67yhJSnXiHh9V28uT0Bfz2cKxc30p9vURMu5IAcDhJT1TpaqUE1x0B /languages/makefile.js
sha384-DjL90zP08vzabGXs0CglFocqoxPXnzAcKhobGV+CQDA5FHGW7xCnxjylOhna+HB+ /languages/makefile.min.js
sha384-Sk9XW/OOutdl6KS1M9Wson0imuqr0LkpoTRDHi5QFH4MWe0aViI5d86BOVkh8Ds0 /languages/markdown.js
sha384-Rv26WbhHH4MDPzeExq4ECmZUYF942tlfVhqA91Drw1P+Ey55KjihLF9RJENxjWr1 /languages/markdown.min.js
sha384-6yimxEGm9AwY562ggpE8Y+JOP2k/CzmRiB1LCQYpXYotigZw0zrOZy16v63xHMv6 /languages/nginx.js
sha384-CppArOy5YFkx1rJ0ZUWNnkF+CAV5OO9pHj3Fk7Kox4p/9H581UDmEck1buzehnjF /languages/nginx.min.js
sha384-0XBmTxpMLuDjB2zdfbi3Lv4Yokm2e1YFGZ9mCmI5887Kpi23jMF5N7rPrf0GdoU/ /languages/php.js
sha384-Bv/Sxv6HlOzYOdV1iQpJTG3xiqGWIIMq9xsFfEX8ss7oNWMgKqOa/J2WSFG2m7Jd /languages/php.min.js
sha384-54aohV6hPIN4CU1dj2qvgXqpFFArFlzGRei+DT/MzbOoxgU2vx7cITGH6ORdualC /languages/puppet.js
sha384-66hg9EELNQEPzzK7tT42aA8jpsZEMQ7ZJAQS64lnGl+LcjCwlSyY8wKgLQWXcLjl /languages/puppet.min.js
sha384-e5MJZgawCv4c+BexmFUMVQU6dLcIOXdieG/a1FPCIgnlGfBIEUUcFMMo+UrKMOtN /languages/scss.js
sha384-BYdYy4D3IX6eNNlKqsviUjxC6EqavvNwCVDMzmie3QXyArWdCQf+VvvFo4ciaNaW /languages/scss.min.js
sha384-2sXmcW3eKeNDWiLtuq9NgFJC4NsLBN/fDTzZevmcgBrSERv6iO/k+c7r9T09Fb8J /languages/sql.js
sha384-jrnLoVn13sB+/dTfoAYVPhg0tYGQzzuzSGP3WTk8OvKAY0hDejpUXFYYI3bohAyW /languages/sql.min.js
sha384-tHBHJBc/9ycdpknrTdDSX+ZslgE1PfOgYaS0Xq4bpN6SvoRRNQcHVc1eObZOOfCH /languages/twig.js
sha384-30no7nkUE3FF//bmsLgfaXy4ly5YfGERgKHQtWhJpS+Ppfm//mOKF3YiWcYcpf8d /languages/twig.min.js
sha384-8v3YMaXFO9cmTNxsHWqwn9wJsV1jVO7rwx4huxqlEQpT/P2tuDbtm+Hs0EdYqu0a /languages/typescript.js
sha384-df1w1nJ43GNwmgbSCrT8YFIYyqFAm+lzj+b6ofuziX8Cfdg9QHFwbORDgAaj//wi /languages/typescript.min.js
sha384-Pgzg6a405W6U1xFjjSs5i8d7V81Tmt/TYn8HFOa+u1psDc8cbs8nC7BuyNXbWWRK /languages/xml.js
sha384-FQjSArDMJE4WMAJGcCNAV+IXIOljcIxM3UFAD2vxjedWmBnnDaAyqRG7AQHf/uM/ /languages/xml.min.js
sha384-6GXi9L5BnOWPU6bzwYL78Zscp23qyDdMLZpZvp4mLzvF2qt0eY/DfsPHiFVXq4hv /languages/yaml.js
sha384-A/iMReLA0Bo3tLydBIoOQXQzYnrwL90jkHYUubrtERUGCbIuU7U0EHge0Xd2s5sr /languages/yaml.min.js
sha384-zIxMlyiBucF02rLCFycGeNC6SYeT07sE7JkHn23kjzDRk6QTSQz7WmMe6IVane87 /highlight.js
sha384-QHcBo2TJaN4LM0bb5+Iu+PHpP6fmBEt/BMyrI8D9uVpUVJpoql26ynSZkEzY7oQ4 /highlight.min.js
</code></pre>
