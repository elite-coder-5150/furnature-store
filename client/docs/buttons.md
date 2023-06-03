# Buttons

## Description
The button component is a reusable UI element that represents a clickable button 
in the application. It provides a consistent and interactive way for users to 
trigger actions or submit forms.

#### Usage
```html
<button class="lg primary" disabled]="form.invalid">Primary</button>
<button class="lg secondary" [disabled]="form.invalid">Secondary</button>
<button class="md primary" [disabled]="form.invalid">Primary</button>
<button class="md secondary" [disabled]="form.invalid">Secondary</button>
```

## Inputs
1. label: string - The text to display on the button
2. disabled: boolean - Whether the button is disabled or not
3. classes: string - The classes to apply to the button

## Customizations
The button component can be customized t fit the needs of the 
applications design and the requirements of the application. 
Developers can modify the compnents appearance and behavior.

1. **Styling** - apply custom styles to the button component using SCSS classes
or component selectors. You can override the defaults styles or add additional 
styles to match the application's design guidelines
2. **Size variations** - Adjust the size of the button by applying different 
SCSS classes or using CSS Properties like **font-size** or **padding**. Provide 
options for small, 
3. **Icon support** - extend the button component to support icons by adding an 
input property for an icon class or path. Integrate popular icon libraries or 
custom svg icons to enhance the visual representation of the button.
4. **Theming** - integrate theming capabilities by allowing developers to pass 
a theme class or color variant to the button component. This can be done through
an input property that dynamically applies the appropriate CSS styles based on
the selected theme.

# Conclusion
The Button component is a versatile and essential UI element for user inter-
actions in your application. By following this documentation, developers can 
easily integrate and customize the Button component to meet their specific 
design and functional requirements. Enhance the user experience and provide 
consistent button interactions with this reusable component.


