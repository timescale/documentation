---
title: "Verb <what the user will do>"
description: "SEO friendly explanation of why the user will do it"
products: [cloud]
keywords: ["noun", "verb"]
tags: ["noun", "noun"]
---

{/* Add any imports here */}
import Skip from "/snippets/intros/_selfhosted_cta.mdx";
import SelfHostedDebianBased from "/snippets/install/_install-self-hosted-debian-based.mdx";
import { CLOUD_LONG, SERVICE_LONG, TIMESCALE_DB, CONSOLE } from '/snippets/vars.mdx';

# Verb <what the user will do>

One or two sentences explaining how something works and why you would follow the procedure 
in this page.

<Note>
Either add an architecture diagram showing how the infrastructure works or a workflow diagram explaining the choices to be made or the user interaction implemented in the page.
</Note>

If necessary, a paragraph or two explaining more about how things work.

This section shows you how to:

- [Verb <what the user will do>](#verb-what-the-user-will-do) 
- [Verb <what the user will do if the procedure is cut into logical sections>](#verb-what-the-user-will-do-if-the-procedure-is-cut-into-logical-sections) 

## Prerequisites

In order to <a couple of words that sound like the title> you need the following:

- A [{SERVICE_LONG}][create-a-service]
- If you are using this template to write a new document, see some good doc examples:
  - [Create your first {SERVICE_LONG}][create-a-service]
  - [Secure your {SERVICE_LONG} with VPC Peering and AWS PrivateLink][secure-vpc-aws]
  - [Install {TIMESCALE_DB} on Linux][install-linux]
- Read the [Google Developer Style Guide][gdsg]

{/* Notice the list items start with a capital letter, but do not end with a full stop. */} 

## Verb \<what the user will do in this section>

Intro sentence. The title should explain what the user will do in this section.
Use this sentence to either give a small explanation of the architecture or 
workflow, or just an intro sentence.

<Procedure>

1. **Do this**

   Take care for spacing and indentation: 
   ```java
   // Maybe a code example
   ```
1. **Then that**
   1. Could be. 
   1. Substeps.
   1. Using autonumbering.  
1. **Until the doing is done** 

   You may need to add a sentence to explain what the user does in more detail:

      ```java
   // Maybe a code example
   ```
   
You have \<what the user will do in this section>.

## Verb \<what the user will do if the procedure is cut into logical sections>

Intro sentence. This section shows how to use tabs to show multiple implementations
of the same thing:

<Tabs label="Install TimescaleDB" persistKey="os">

<Tab title="Platform, product or reason " label="windows">

1. **Do this**

    Code example or procedure 
2. **Then that**

   Code example or procedure
</Tab>

<Tab title="Platform, product or reason" label="debian">

<SelfHostedDebianBased />

</Tab>

</Tabs>

You have \<what the user will do in this section>.

[create-a-service]: /cloud/tiger/get-started/create-services
[secure-vpc-aws]: /cloud/tiger/secure-access/vpc-peering-and-aws-private-link
[install-linux]: /self-host/timescaledb/install-and-update/install-self-hosted
[gdsg]: https://developers.google.com/style/highlights
