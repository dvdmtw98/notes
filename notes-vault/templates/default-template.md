<%*
const title = await tp.system
	.prompt("Enter File Title", tp.file.title.replaceAll("-", " "));
const fileName = title.replace(/\s/g, "-").toLowerCase();
await tp.file.rename(fileName);

const filterWords = ["and"];

const words = title.split(" ");
const titleCaseTitle = words
    .map(word => {
        if (filterWords.includes(word.toLowerCase())) {
            return word;
        } else {
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }
    }) 
    .join(" ");
-%>
---
title: <% titleCaseTitle %>
tags:
date: <% tp.date.now("YYYY-MM-DD HH:mm:ss ZZ") %>
updated: <% tp.date.now("YYYY-MM-DD HH:mm:ss ZZ") %>
---

<% tp.file.cursor() %>
