# Search Component

## Description

The search component is responsible for displaying the search bar and search 
results. It provides a simple and intuitive way for users to search for products 
in the application. This document will guide you through the process of creating 
a search component effectively.

## Parameters
1. **term** - the search term entered by the user.
2. **results** - the search results returned by the search service.

## Usage
To use the search component you will need to import it into your project.
```html
<form class="search-form">
    <div class="form-group">
        <label for="search"></label>
        <input type="text" id="search" placeholder="Search">
        <button class="md-primary">search</button>
    </div>
</form>
```

-- styles for the above component
```scss
@import "../scss/partials/vars";
.search-form {
    width: 100%;
    margin-bottom: 2rem;
    .form-group {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        label {
            display: none;
        }
        input {
            width: 100%;
            height: 100%;
            padding: 1rem;
            border: 1px solid $clr-;
            border-radius: 0.5rem;
            font-size: 1.6rem;
            font-weight: 300;
            color: $dark-grey;
            outline: none;
            transition: all 0.2s ease-in-out;
            &:focus {
                border: 1px solid $primary-color;
            }
        }
        button {
            width: 100%;
            height: 100%;
            padding: 1rem;
            border: 1px solid $primary-color;
            border-radius: 0.5rem;
            font-size: 1.6rem;
            font-weight: 300;
            color: $white;
            background-color: $primary-color;
            outline: none;
            transition: all 0.2s ease-in-out;
            &:hover {
                cursor: pointer;
                background-color: $white;
                color: $primary-color;
            }
        }
    }
}
```
