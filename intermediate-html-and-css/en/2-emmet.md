_**Intermediate HTML and CSS Course**_

# Emmet

## Introduction

Emmet is a plugin, built into VS Code, that helps you write HTML and CSS more efficiently by providing a bunch of clever shortcuts. By now, you have written a good amount of HTML and CSS, and if you have been using VS Code there’s a big chance that you have already encountered Emmet in some way.

## Lesson overview

This section contains a general overview of topics that you will learn in this lesson.

- Use some of Emmet’s most useful shortcuts.
- Set up custom Emmet keybindings in VS Code.

## Emmet

Emmet is a really useful tool for anyone that works a lot with HTML and CSS. Luckily, Emmet does not have that big of a learning curve, and if you already know how to write HTML and CSS you’ll have no trouble picking up Emmet abbreviations.

Let’s start off by generating an HTML boilerplate with Emmet. Opening up an empty HTML file in VS Code and entering ! should trigger Emmet suggestions like so:

![](./../assets/img/emmet-1.png)

Pressing `Enter` should generate the following text:
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```
We have just used one of many Emmet abbreviations. There are lots of useful Emmet abbreviations that you should check out, like [Wrap with Abbreviation](https://docs.emmet.io/actions/wrap-with-abbreviation/) and Remove Tag. Definitely go through those before moving forward.

Considering how useful these two are, we will be setting up VS Code shortcuts for them. Start off by opening the keyboard shortcuts window. You can do so by clicking the cog icon on the bottom left and selecting keyboard shortcuts, or by pressing `Cmd` + `K` followed by `Cmd` + `S` on Mac, or `Ctrl` + `K` followed by `Ctrl` + `S` on Windows/Linux.

![](./../assets/img/emmet-2.png)

After entering the keyboard shortcuts window, you should be able to access all of the Emmet actions by searching for `Emmet:<action>`. In our case, it will be `Emmet:Wrap With Abbreviation`

![](./../assets/img/emmet-3.png)

You can now add a shortcut to it by clicking the plus sign and entering whichever key combination you would like for that specific action. You can do the same for Remove Tag by searching for Emmet:Remove tag.