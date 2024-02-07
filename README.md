# Package is deprecated
# Awedde version 1.0.4

- Using built-in class as a name for the class `URL` caused problem, Now fixed with a new name `URLAwedde`
- Validation of OTP and Token upgrade.
- Server request update.
- Using Detect features class for environment value determination.
- Merge URL update.
- Android first then Linux.

# Awedde

[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://github.com/ermi111/awedde/releases/tag/v1.0.0)

<p align="center" style="border-radius: 20px;">
    <img src="logo/github.png" alt="Awedde-logo">
</p>


Awedde is a versatile collection of utility classes developed to simplify various tasks. It covers a wide range of functionalities, including DOM manipulation, form validation, media handling, network and security operations, and device detection; And other related tasks, Works for browser environment

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [Modules](#modules)
- [Contributing](#contributing)
- [License](#license)

## Introduction

Awedde is designed to be a comprehensive toolkit, offering utility classes for different aspects of web development. Whether you need to manipulate the DOM, validate forms, handle media, perform network operations, or detect devices, Awedde has you covered.

## Features

- **DOM Manipulation:** Simplify HTML document traversal and manipulation, including composites.
- **Form Validation:** Easily validate and handle form-related tasks.
- **Media Handling:** Streamline tasks related to media elements.
- **Network Operations:** Perform network-related tasks efficiently.
- **Device Detection:** Detect and handle device-specific tasks.

## Getting Started

To get started with Awedde, follow the steps below.

## Installation

```bash
# Use this to get the package, Awedde is not for node.js

npm install awedde 
```

## Usage

```javascript
// Use ESmodule in browser
// Import the whole Awedde modules
import awedde from "./path/to/your/awedde/dist/index.js";

// Import the Awedde modules as needed
import dom from "./path/to/your/awedde/dist/index.js";
import device from "./path/to/your/awedde/dist/index.js";
import form from "./path/to/your/awedde/dist/index.js";
import media from "./path/to/your/awedde/dist/index.js";
import network from "./path/to/your/awedde/dist/index.js";

const main = awedde.device.DetectDevice.detectOS(); // to detect OS
console.log(main);
```

```HTML 
<!-- In you html head tag -->
<script type="module" src="./path/to/your/awedde/dist/index.js"></script>

<!-- Now use awedde in you body script tag! -->

<!-- For example -->
<script>
    const button = document.querySelector('button');
    awedde.dom.ClassUtility.addClasses(button, 'you-first-class','second-class' /* continue as your need!*/);
</script>
```

## Modules
Awedde is organized into the following modules:

dom: DOM manipulation utilities.

form: Form validation and related tasks.

media: Media handling utilities.

network: Network operations.

device: Device detection and device-related tasks.

Documentation is available inline with the code.

## Contributing
I (Ermiyas Arage) welcome contributions from the community. If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.

## License
Awedde is licensed under the Apache-2.0 License - see the [LICENSE](https://github.com/ermi111/awedde?tab=Apache-2.0-1-ov-file#readme) file for details.

Thank you for choosing Awedde! I hope it simplifies your development tasks and relief stress. If you have any questions or feedback, please reach out to me through [Telegram](https://t.me/ermiyasarage).
