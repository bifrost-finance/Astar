(function() {var implementors = {};
implementors["pallet_dapps_staking"] = [{"text":"impl StorageValue&lt;u32&gt; for UntreatedEra","synthetic":false,"types":[]}];
implementors["pallet_ovm"] = [{"text":"impl StorageValue&lt;Schedule&gt; for CurrentSchedule","synthetic":false,"types":[]}];
implementors["pallet_plasm_rewards"] = [{"text":"impl StorageValue&lt;u32&gt; for HistoryDepth","synthetic":false,"types":[]},{"text":"impl StorageValue&lt;Vec&lt;(u32, u32)&gt;&gt; for BondedEras","synthetic":false,"types":[]},{"text":"impl StorageValue&lt;u32&gt; for CurrentEra","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Trait&gt; StorageValue&lt;ActiveEraInfo&lt;&lt;&lt;T as Trait&gt;::Time as Time&gt;::Moment&gt;&gt; for ActiveEra&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl StorageValue&lt;Forcing&gt; for ForceEra","synthetic":false,"types":[]}];
implementors["pallet_plasm_validator"] = [{"text":"impl StorageValue&lt;u32&gt; for UntreatedEra","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Trait&gt; StorageValue&lt;Vec&lt;&lt;T as Trait&gt;::AccountId&gt;&gt; for Validators&lt;T&gt;","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()