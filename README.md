Hello.

This repo is for my blog. You can check it our [here](https://fizzygalacticus.github.io)

## Notes for me

This project uses the [Hugo](https://gohugo.io/) framework for building static pages out of templates, and [Husky](https://github.com/typicode/husky) to auto-build on commit.

### Initialization

This project uses my custom version of the [terminal](https://github.com/FizzyGalacticus/hugo-theme-terminal) theme, included as a submodule. You can pull its contents with:

```sh
git submodule update --init --recursive
```

You will also need to install Node dependencies:

```sh
yarn
```

### Creating new posts

For new regular posts:

```sh
yarn new "<name_of_post"
```

For new code diary entries:

```sh
yarn code-diary "<name_of_code_diary>"
```
