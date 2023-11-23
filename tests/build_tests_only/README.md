# Build tests only

If using wildcards for executing tests, most of the time more stuff is being build than actually needed for the tests.
Use the `--build_tests_only` flag in this case to reduce the targets to only targets that are required for test execution.

```bash
$ bazel clean && bazel test //...
$ ls -l bazel-bin/tests/build_tests_only
total 224
drwxr-xr-x@ 5 user  wheel   160B Nov 23 21:02 _objs
-r-xr-xr-x@ 1 user  wheel    35K Nov 23 21:02 hello_lib_test
-r-xr-xr-x@ 1 user  wheel   365B Nov 23 21:02 hello_lib_test-2.params
-r-xr-xr-x@ 1 user  wheel    16B Nov 23 21:02 hello_lib_test.repo_mapping
drwxr-xr-x@ 5 user  wheel   160B Nov 23 21:02 hello_lib_test.runfiles
-r-xr-xr-x@ 1 user  wheel   381B Nov 23 21:02 hello_lib_test.runfiles_manifest
-r-xr-xr-x@ 1 user  wheel    40K Nov 23 21:02 hello_world
-r-xr-xr-x@ 1 user  wheel   356B Nov 23 21:02 hello_world-2.params
-r-xr-xr-x@ 1 user  wheel    16B Nov 23 21:02 hello_world.repo_mapping
drwxr-xr-x@ 5 user  wheel   160B Nov 23 21:02 hello_world.runfiles
-r-xr-xr-x@ 1 user  wheel   372B Nov 23 21:02 hello_world.runfiles_manifest
-r-xr-xr-x@ 1 user  wheel   4.6K Nov 23 21:02 libhello_lib.a
-r-xr-xr-x@ 1 user  wheel   174B Nov 23 21:02 libhello_lib.a-2.params
```

```bash
$ bazel clean && bazel test --build_tests_only //...
$ ll bazel-bin/tests/build_tests_only 
total 120
drwxr-xr-x@ 4 user  wheel   128B Nov 23 21:26 _objs
-r-xr-xr-x@ 1 user  wheel    35K Nov 23 21:26 hello_lib_test
-r-xr-xr-x@ 1 user  wheel   365B Nov 23 21:26 hello_lib_test-2.params
-r-xr-xr-x@ 1 user  wheel    16B Nov 23 21:26 hello_lib_test.repo_mapping
drwxr-xr-x@ 5 user  wheel   160B Nov 23 21:26 hello_lib_test.runfiles
-r-xr-xr-x@ 1 user  wheel   381B Nov 23 21:26 hello_lib_test.runfiles_manifest
-r-xr-xr-x@ 1 user  wheel   4.6K Nov 23 21:26 libhello_lib.a
-r-xr-xr-x@ 1 user  wheel   174B Nov 23 21:26 libhello_lib.a-2.params
```
