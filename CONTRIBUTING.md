# Contributing

We'd love for you to contribute to our source code and to make it even better than it is today!

Here are the guidelines we'd like you to follow:


## <a name="issues"></a> Issues

If you have questions about how to use this library, please open a GitHub Issue. If you find a bug
in the source code or a mistake in the documentation, you can also help us by submitting a Pull
Request with a fix.

Before you submit your issue or PR search the archive, maybe your question was already answered.

Providing the following information will increase the chances of your issue being dealt with quickly:

* **Steps to Reproduce** - detailed set of steps to reproduce the problem, code samples or, if possible, a live example
* **What Happens** - the problem, if an error is being thrown a formatted stack trace will be very helpful
* **What Should Happen** - describe what the correct/expected behaviour should be
* **Version(s) Affected** - version in use when the problem was detected
* **System(s) Affected** - platform/os/browser, where applicable
* **Suggest a Fix** - maybe you can't fix the bug yourself, but perhaps you can point to what might be
  causing the problem (line of code or commit)

## <a name="pulls"></a> Pull Requests

Before you submit your PR consider the following guidelines:

* Make your changes in a new git branch `git checkout -b fix-problem master`
* Create your patch, **including unit tests**.
* Limit the changes to a well defined scope.
* Avoid unrelated changes, even if minor (like fixing typos or code style in unrelated files).
* Commit your changes using a descriptive commit message that follows our [commit message format](#commit).
* Push your branch to GitHub

* In GitHub, send a PR upstream.
* If we suggest changes then,
  * Make the required updates.
  * Re-run the test suite to ensure tests are still passing.
  * Rebase your branch and force push to your GitHub repository (this will update your PR):

```shell
git rebase master -i
git push origin fix-branch -f
```

That's it! Thank you for your contribution!

### After your PR is merged

Please delete your branch and pull the changes from upstream:

* Delete your remote branch on GitHub.
* Check out the master branch.
* Delete the local branch.
* Update your master with the latest upstream version.

```shell
git push origin --delete fix-branch
git checkout master -f
git branch -D fix-branch
git pull --ff upstream master
```


## <a name="rules"></a> Coding Rules and Styleguide

* All features or bug fixes **must be tested**.
* Run the full test suites, ensure that all tests pass and check code coverage of new code.
* Follow the existing code style and guidelines where available.
* Make sure you run existing linters and beautifiers if available.
* All public API methods **must be documented** in consistency with existing documentation.


## <a name="commit"></a> Git Commit Guidelines

We have very precise rules over how our git commit messages can be formatted.  This leads to **more
readable messages** that are easy to follow when looking through the **project history**.  But also,
we use the git commit messages to **generate the CHANGELOG**.

### Message Format

Each commit message consists of a **header** and a **body**.

The header has a special format that includes a **type**, an optional **scope** and a **subject**:

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
```

Any line of the commit message cannot be longer 100 characters.

### Type

Must be one of the following:

* **feature**: A new feature
* **fix**: A bug fix
* **refactor**: A code change that neither fixes a bug or adds a feature
* **performance**: A code change that improves performance
* **docs**: Documentation only changes
* **clean**: White-space, formatting, dead code, comments, dead files, ...
* **test**: Adding missing tests
* **tools**: Changes to the build process or auxiliary tools

```
clean: remove obsolete config files
```

### Scope (optional)

What part of the library is affected by the change, e.g.: `config`, `api`, etc...

```
fix(config): set defaults
```

### Subject

Description of the change:

* use the imperative, present tense: "change" not "changed" nor "changes"
* don't capitalize
* no dot (.) at the end

### Body

Provide more details about the commit in the message body, after the blank link:

- motivation for the change
- information about **Breaking Changes**
- reference existing Github issue(s) number via `GH-xxxx` instead of `#xxx`.

Just as in the **subject**, use the imperative, present tense: "change" not "changed" nor "changes".
