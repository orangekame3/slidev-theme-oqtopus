---
theme: ./
---

# Welcome to OQTOPUS Theme Tutorial

## Learn how to use this Slidev theme

This presentation serves as a tutorial to showcase the features and custom components available in the OQTOPUS Slidev theme.

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer oqtopus-highlight" flex="~ justify-center items-center gap-2">
    Start Tutorial <div class="i-carbon:arrow-right inline-block"/>
  </span>
</div>

---
layout: default
---

# Default Layout

## Your Standard Content Slide

This is the most common layout for your presentation content. It includes a header, a sub-header, and a main content area.

- Use markdown for lists
- **Bold** and *italic* text are supported
- You can easily embed images and other elements

---
layout: section
---

# Section Layout

## For Major Transitions or Chapter Breaks

This layout is designed for impactful section titles or breaks in your presentation. It features a large, centered title and subtitle.

---
layout: two-cols
---

::left::

# Two-Column Layout

## Divide Your Content

This layout is perfect for comparing two ideas, showing code alongside output, or presenting information side-by-side.

- Content for the left column
- Use `::left::` and `::right::`
- Markdown works as usual

::right::

# Right Column

## More Content Here

You can place any content in the right column, including text, images, or even other components.

- Content for the right column
- Keep it concise
- Visuals are great here

---
layout: agenda
---

# Agenda Layout

## Outline Your Presentation Flow

This layout is ideal for presenting a clear agenda or table of contents for your talk.

- Introduction to the Theme
- Exploring Layouts
- Custom Components Showcase
- Theme Styling & Utilities
- Q&A and Resources

---
layout: cover
---

# Cover Layout

## For Your Presentation Title Page

This layout is designed for the very first slide of your presentation, featuring a prominent title and subtitle.

---
layout: thanks
---

# Thank You Layout

## Conclude Your Presentation

This layout provides a professional and clean way to end your presentation, offering space for contact information or a final message.

---

# Custom Components

## Enhance Your Slides with Pre-built Elements

This theme provides several custom Vue components to enrich your presentations.

<div class="grid grid-cols-3 gap-6 mt-8">

<MetricsCard trend="15%" trend-direction="up">
  <template #icon>📈</template>
  <template #title>Metric 1</template>
  <template #value>123</template>
  <template #subtitle>Units/day</template>
</MetricsCard>

<MetricsCard trend="8ms" trend-direction="down">
  <template #icon>📉</template>
  <template #title>Metric 2</template>
  <template #value>45.6</template>
  <template #subtitle>Avg. Value</template>
</MetricsCard>

<MetricsCard trend="99.8%" trend-direction="stable">
  <template #icon>📊</template>
  <template #title>Metric 3</template>
  <template #value>789</template>
  <template #subtitle>Total Count</template>
</MetricsCard>

</div>

---

# Data Chart Component

## Visualize Your Data Easily

Use the `<DataChart>` component to display various types of charts.

<DataChart
  title="Sample Data Trends"
  :data="[
    { label: 'Item A', value: 50 },
    { label: 'Item B', value: 75 },
    { label: 'Item C', value: 60 },
    { label: 'Item D', value: 90 }
  ]"
  type="bar"
/>

<div class="oqtopus-badge mt-4"> Try changing 'type' to 'line' or 'pie'!</div>

---

# Timeline Component

## Illustrate Processes or Roadmaps

The `<Timeline>` component helps you present sequential events or project phases clearly.

<Timeline
  title="Project Phases Example"
  :items="[
    {
      date: 'Start',
      title: 'Phase 1: Planning',
      description: 'Define scope and objectives.',
      status: 'completed',
      active: false,
      icon: '📝'
    },
    {
      date: 'Mid',
      title: 'Phase 2: Development',
      description: 'Build core features.',
      status: 'in-progress',
      active: true,
      icon: '💻'
    },
    {
      date: 'End',
      title: 'Phase 3: Deployment',
      description: 'Release to production.',
      status: 'pending',
      active: false,
      icon: '🚀'
    }
  ]"
/>

---

# Quantum Circuit Component

## Display Quantum Circuits

For quantum computing related presentations, use the `<QuantumCircuit>` component.

<QuantumCircuit
  :qubits="['q0', 'q1', 'q2']"
  :gates="[
    { id: 1, type: 'hadamard', label: 'H', qubit: 0, position: 1 },
    { id: 2, type: 'cnot', control: 0, target: 1, position: 2 },
    { id: 3, type: 'pauli-x', label: 'X', qubit: 2, position: 3 },
    { id: 4, type: 'hadamard', label: 'H', qubit: 1, position: 4 },
    { id: 5, type: 'cnot', control: 1, target: 0, position: 5 },
    { id: 6, type: 'pauli-z', label: 'Z', qubit: 2, position: 6 }
  ]"
>
  <template #title>More Complex Quantum Circuit Example</template>
</QuantumCircuit>

<div class="oqtopus-highlight mt-4">
  **Note**: This is a visual representation, not a functional simulator.
</div>

---

# Theme Styling & Utilities

## Leverage Custom Classes

This theme provides specific utility classes for consistent styling.

<div class="grid grid-cols-2 gap-8 mt-8">

<div class="oqtopus-card">

##  **oqtopus-card**
- A styled container for content
- Features border, shadow, and padding

</div>

<div class="oqtopus-highlight">

##  **oqtopus-highlight**
- For important call-outs or buttons
- Gradient background and rounded corners

</div>

<div class="oqtopus-badge">

##  **oqtopus-badge**
- Small, informative labels
- Distinctive background and text color

</div>

</div>

---

# Code Blocks

## Showcase Your Code

Easily embed and highlight code snippets in your slides.

```python
# Python example
def hello_world():
    print("Hello, OQTOPUS Theme!")

hello_world()
```

```js
// JavaScript example
function greet(name) {
  console.log(`Hello, ${name}!`);
}

greet('Slidev User');
```

---

# Thank You for Completing the Tutorial!

## Explore More & Contribute

We hope this tutorial helped you understand the OQTOPUS Slidev theme.

- **Read the Docs:** Check the theme's `README.md` for more details.
- **Experiment:** Try creating your own slides with these features.
- **Contribute:** Found a bug or have an idea? Your contributions are welcome!

---

# Additional Resources

<div class="grid grid-cols-2 gap-8 mt-8">

<div class="oqtopus-card">

##  **Slidev Documentation**
- Learn more about Slidev itself
- [slidev.org](https://slidev.org/)

</div>

<div class="oqtopus-card">

##  **Theme Repository**
- View source code and contribute
- [GitHub Link Here (replace with actual)](https://github.com/orangekame3/slidev-theme-oqtopus)

</div>

</div>
