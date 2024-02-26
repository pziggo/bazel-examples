# Vite with iBazel

This example shows how to run a dev server based on [vite](https://vitejs.dev/) with [iBazel](https://github.com/bazelbuild/bazel-watcher) during development of javascript or typescript projects. iBazel will rebuild the targets that have changed automatically as soon as the file with the change has been changed. After that, vite is watching the bazel execroot for changes of the build results.

```shell
$ ibazel run //ibazel/vite:dev
[...]
  vite:deps scanning for dependencies... +0ms

  VITE v5.1.4  ready in 288 ms

  ➜  Local:   http://127.0.0.1:5173/
```

After making a change in `ibazel/vite/src/mylib/index.js`, the bazel build results and vite sync messages can be seen in the command output, while the change becomes visible immediately in the browser.

```shell
[...]
iBazel [4:26PM]: Changed: "/Users/developer/workspaces/bazel-examples/ibazel/vite/src/mylib/index.js". Rebuilding...
iBazel [4:26PM]: Running //ibazel/vite:dev
iBazel [4:26PM]: Notifying of changes
INFO: Analyzed target //ibazel/vite:dev (0 packages loaded, 0 targets configured).
INFO: Found 1 target...
Target //ibazel/vite:dev up-to-date:
  bazel-bin/ibazel/vite/dev.sh
INFO: Elapsed time: 0.107s, Critical Path: 0.01s
INFO: 2 processes: 1 internal, 1 local.
INFO: Build completed successfully, 2 total actions
iBazel [4:26PM]: IBAZEL BUILD SUCCESS
iBazel [4:26PM]: Triggering live reload
requesting reload: reload
Syncing 6 files && folders...
1 file synced in 2 ms
  vite:hmr [file change] src/mylib/index.js +4s
4:26:53 PM [vite] page reload src/mylib/index.js (x2)
  vite:html-fallback Rewriting GET / to /index.html +4s
```
