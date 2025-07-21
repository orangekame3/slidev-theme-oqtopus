# slidev-theme-oqtopus

[![NPM version](https://img.shields.io/npm/v/slidev-theme-oqtopus?color=3AB9D4&label=)](https://www.npmjs.com/package/slidev-theme-oqtopus)

A quantum-inspired theme for [Slidev](https://github.com/slidevjs/slidev) designed for OQTOPUS presentations.

<!--
  Learn more about how to write a theme:
  https://sli.dev/guide/write-theme.html
--->

<!--
  run `npm run dev` to check out the slides for more details of how to start writing a theme
-->

<!--
  Put some screenshots here to demonstrate your theme

  Live demo: [...]
-->

## Install

Add the following frontmatter to your `slides.md`. Start Slidev then it will prompt you to install the theme automatically.

<pre><code>---
theme: <b>oqtopus</b>
---</code></pre>

Learn more about [how to use a theme](https://sli.dev/guide/theme-addon#use-theme).

## Layouts

This theme provides the following layouts:

- `cover` - Cover slide with animated quantum particles background
- `intro` - Introduction slide with gradient styling

## Components

This theme provides the following components:

### QuantumCircuit

Display quantum circuits in your slides:

```vue
<QuantumCircuit 
  :qubits="['0', '1']" 
  :gates="[
    { id: 1, type: 'hadamard', label: 'H' },
    { id: 2, type: 'cnot', label: '⊕' }
  ]"
>
  <template #title>Bell State Circuit</template>
</QuantumCircuit>
```

## Contributing

- `npm install`
- `npm run dev` to start theme preview of `example.md`
- Edit the `example.md` and style to see the changes
- `npm run export` to generate the preview PDF
- `npm run screenshot` to generate the preview PNG


## License

This project is licensed under the Apache License 2.0. See the [LICENSE](LICENSE) file for details.
