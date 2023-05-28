import axios from 'axios';
import * as $ from 'jquery';
interface FormData {
    name: string;
    email: string;
}

// const form = document.getElementById('myForm') as HTMLFormElement;
//
// // @ts-ignore
// form.addEventListener('submit', async (event) => {
//     event.preventDefault(); // Prevent the default form submission
//
//     const formData: FormData = {
//         name: (form.elements.namedItem('name') as HTMLInputElement).value,
//         email: (form.elements.namedItem('email') as HTMLInputElement).value,
//     };
//
//     if (formData.name === '' || formData.email === '') {
//         alert('Please fill in all fields');
//         return;
//     } else {
//         try {
//             const response = await axios.post('/api/newsletter', formData);
//             console.log(response.data);
//
//             form.reset();
//         } catch (error) {
//             console.error(error);
//         }
//     }
// });

class Form {
    public form: HTMLFormElement;

    init() {
       this.cacheDOM();
       this.initEvents();

    }

    cacheDOM() {
        const form = document.getElementById('myForm') as HTMLFormElement;
    }

    initEvents() {
        // @ts-ignore
        this.form.addEventListener('submit', async (event) => {
            event.preventDefault(); // Prevent the default form submission

            const formData: FormData = {
                name: (this.form.elements.namedItem('name') as HTMLInputElement).value,
                email: (this.form.elements.namedItem('email') as HTMLInputElement).value,
            };

            if (formData.name === '' || formData.email === '') {
                alert('Please fill in all fields');
                return;
            } else {
                try {
                    const response = await axios.post('/api/newsletter', formData);
                    console.log(response.data);

                    this.form.reset();
                } catch (error) {
                    console.error(error);
                }
            }
        });
    }
}

