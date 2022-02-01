(function() {var implementors = {};
implementors["astar_runtime"] = [{"text":"impl&lt;R&gt; PrecompileSet for <a class=\"struct\" href=\"astar_runtime/struct.AstarNetworkPrecompiles.html\" title=\"struct astar_runtime::AstarNetworkPrecompiles\">AstarNetworkPrecompiles</a>&lt;R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R: Config,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;R::Call as Dispatchable&gt;::Origin: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;R::AccountId&gt;&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;R::Call: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;Call&lt;R&gt;&gt; + Dispatchable&lt;PostInfo = PostDispatchInfo&gt; + GetDispatchInfo + Decode,&nbsp;</span>","synthetic":false,"types":["astar_runtime::precompiles::AstarNetworkPrecompiles"]}];
implementors["local_runtime"] = [{"text":"impl&lt;R:&nbsp;Config&gt; PrecompileSet for <a class=\"struct\" href=\"local_runtime/struct.LocalNetworkPrecompiles.html\" title=\"struct local_runtime::LocalNetworkPrecompiles\">LocalNetworkPrecompiles</a>&lt;R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R::Call: Dispatchable&lt;PostInfo = PostDispatchInfo&gt; + GetDispatchInfo + Decode,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;R::Call as Dispatchable&gt;::Origin: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;R::AccountId&gt;&gt;,&nbsp;</span>","synthetic":false,"types":["local_runtime::precompiles::LocalNetworkPrecompiles"]}];
implementors["shibuya_runtime"] = [{"text":"impl&lt;R&gt; PrecompileSet for <a class=\"struct\" href=\"shibuya_runtime/struct.ShibuyaNetworkPrecompiles.html\" title=\"struct shibuya_runtime::ShibuyaNetworkPrecompiles\">ShibuyaNetworkPrecompiles</a>&lt;R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R: Config,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;R::Call as Dispatchable&gt;::Origin: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;R::AccountId&gt;&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;R::Call: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;Call&lt;R&gt;&gt; + Dispatchable&lt;PostInfo = PostDispatchInfo&gt; + GetDispatchInfo + Decode,&nbsp;</span>","synthetic":false,"types":["shibuya_runtime::precompiles::ShibuyaNetworkPrecompiles"]}];
implementors["shiden_runtime"] = [{"text":"impl&lt;R&gt; PrecompileSet for <a class=\"struct\" href=\"shiden_runtime/struct.ShidenNetworkPrecompiles.html\" title=\"struct shiden_runtime::ShidenNetworkPrecompiles\">ShidenNetworkPrecompiles</a>&lt;R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R: Config,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;R::Call as Dispatchable&gt;::Origin: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;R::AccountId&gt;&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;R::Call: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;Call&lt;R&gt;&gt; + Dispatchable&lt;PostInfo = PostDispatchInfo&gt; + GetDispatchInfo + Decode,&nbsp;</span>","synthetic":false,"types":["shiden_runtime::precompiles::ShidenNetworkPrecompiles"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()