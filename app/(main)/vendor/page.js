"use client"

import {useState} from "react";
import React from 'react';
import { Dropdown } from 'primereact/dropdown';
import Link from "next/link";
import {Button} from "primereact/button";
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import {Dialog} from "primereact/dialog";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { TabView, TabPanel } from 'primereact/tabview';

const ProductTable = () => {
    const [selectedCity, setSelectedCity] = useState(null);
    const cities = [
        { name: 'Vendor', code: '' },
        { name: 'Drivers', code: '' }

    ];

    const tableDataD = [
        {
            name: 'POC Name',
            location: 'Poc Number',
            cuisine: 'Restaurant number',

        },
        {
            name: 'Burger Joint',
            location: 'Los Angeles, CA',
            cuisine: 'American',
            vendorDetails: 'Details about Burger Joint',
            pocName: 'Jane Smith',
            pocNumber: '098-765-4321',
            restaurantNumber: '202',
            menu: 'Burgers, Fries, Shakes',
            pastOrders: 'Order 5, Order 6',
            upcomingOrders: 'Order 7, Order 8',
        },
        {
            name: 'Sushi Spot',
            location: 'San Francisco, CA',
            cuisine: 'Japanese',
            vendorDetails: 'Details about Sushi Spot',
            pocName: 'Satoshi Nakamoto',
            pocNumber: '555-555-5555',
            restaurantNumber: '303',
            menu: 'Sushi, Sashimi, Tempura',
            pastOrders: 'Order 9, Order 10',
            upcomingOrders: 'Order 11, Order 12',
        },
    ];

    const [selectedVendor, setSelectedVendor] = useState(false);
    const [visible, setVisible] = useState(false);
    const [selectedDriver, setSelectedDriver] = useState(false);
    const vendorOptions = tableDataD.map((vendor, index) => ({
        label: vendor.name,
        value: index,
    }));

    const [vendors, setVendors] = useState([
        {
            id: 1,
            name: 'Alex',
            pocName: 'John Doe',
            pocNumber: '123-456-7890',
            restaurantNumber: '987-654-3210',
            menu: ['Burger', 'Pizza', 'Salad']
        }
    ]);

    const [drivers, setDrivers] = useState([
        {
            id: 1,
            name: 'jonny',
            pocName: 'John Doe',
            pocNumber: '123-456-7890',
            restaurantNumber: '987-654-3210',
            menu: ['Cash']
        }
    ]);

    const tableData = [
        {
            image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQDxUQEBAPDxAPFQ8PDw8QEA8VDw8PFRUWFxUVFhYYHSggGBolHRUWITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGBAQGi8dHx0tLS0tLSstLTAtLS0tNy0tLS0tLS0tLS0tLS0tNy0tLSstLS0tLSstLS0tKy0tLS0tLf/AABEIANMA7wMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAABAAIDBAUGB//EAEAQAAIBAgQDBQYDBQcEAwAAAAABAgMRBAUSITFBUQYTYXGRIoGhscHwMkJSB2Jy0eEUIyRDU8LxFWOCkiUzNP/EABoBAAMBAQEBAAAAAAAAAAAAAAABAgMFBAb/xAArEQACAgEDAwIFBQEAAAAAAAAAAQIRAxIhMQQFQSJREzNCYYEycZHR8CP/2gAMAwEAAhEDEQA/AOrHIaFHxSOkOQRqY5FpiBYQ4BQwCCAQCCIIwAJsq5lmNPD03UqSUYx6s8r7RducRXbhQk6NPh7LtUkvdul97G+Hp55X6RNpcnp+YZvh6H/3VqdNvgpSV37uJhYr9oGApuynOo/3Kc7erSPJJKcnd6pSfGcnJv5lilgdXJ26tWX36HSh26P1NszeQ9CqftMoJ7Yes09tTlBL4XNXKu2eHrK8pQpcPxTjz+p5e8tVnvHfotivRwsY7S3e97cr+OxpLt2JqlsL4r9j3mhiIVFqhKM11i018CVM8Ly7GVaM1OlVnTa6Sa38Vw9253+RdtG5KnioxWp2jWhtFP8Afjy816I8WfoJ41a3RUZqR3MWPIKcyaLOc0Nj7gEwAIKCNHCAAUxoUMBMDHDWADbCCxrIGQsQhEljkFAQSkIIhIJaAQhCGACrmePp4elKrVdowV/Fvkl4ls8p/aFm8sRif7PBtUqG0rfmqc/5eptgxfEnpButzE7Q9oK2OquUnopJtU6fKK5X6vxKeAy5ze265yfy8WTYHBKcv3Vs7dei8Tfw+HVtrJLl+WPnbi/D/k+ghCMFUVSMHbK2HwUIbKLk/Hn7/wCRanhtryaiuS22+/tBnU3tHdr73/kVcS1xk3N9E9vU0sdFfGVYrhHX4vh8TMhUnUdrW8uCNKjgalaaSppX2V02/ibEMvhQi1K3eLirbICWc/XwUVTU20pp20vVfzI6UbxunZ9N7Ly/oXcWpTk3tHk7dBk8HLTZTTtyfHzt98B3tQknydL2J7SuElhq7el7UpPk3yv0Z6LCR4JOcoPe6t8GesdjM6/tWHTb/vIezPx6P3nG67p9L1rhm0XZ1CYhsGOOYMKExCEIAkIKABMAWBgA1gEwkjIBMFwkliHIaOQ0A5BGjjRCCAQRgVMzxSpUZVHwimzxqUnOb/XUcpyl0XFy+J6N+0HE6cMqadu8kk/FJNv6ep5zrUFf80/hBPh73b0Or2+GzkRN+DRw9JJKK2X3dktao5NQjtFbXXPyM6jWctlzvd9IriaWX0ZVJKK/NZeUft/M6dkLcsYag5exThqb90Vfq+ZuZZ2QnN6qk/clZHRZDkUacU2rt7tvidJSw9hRbZbSRg4DIIUrNLdGL2j7POTdRX3d2j0CNEjxWHTVmi9JNo8cqYJRT1Jv7+ZlY5bbN3XPnb7+R6dm+Qak3H0PPM8y6dNvZrx5eAm6HRzNetq2lx69eht/s9zHuMWoSfsVvY/8uX34mHiaL4pe7oPwb0zjPnGUX7kzDOlKDi/JK5Pe6ZIQYaV4p9UmTnzjNGIQbAEIQkIVwAIGEAABgCxrEMrocNQTMscICChgFDxo4tCFYQUxFAcH2+vOtTh+6/WTt9DhMZU1VG1wW0fKJ2XbyvpxG36Ipe9s5XD4VtX/AIkd7oo/8kZ5OSTAw2b5tqK8Fv8AQ7bsVgLzc3HZbI5LC071NMVdRfq+nwS950GBhmdKFqamlu1p7p/W7PXpsUXR6xhaKaLionl+XdpswpztVjtdXUoWfD0PQ8uzDvIqXUtUhST5NFRGzplLH4twg2uKRwmIz/MZTenWo39lRhd2t5FakSos7zEwVjms3yyFRPZGZTxGaz3etL95U0/SxLDE42D/AL6nrg/zQS1L0ImjSJwHaDK3Slw23X398jDw1Pe3U9R7Q4eNWk3blc84jC1S3XdHnnwOSpnsWTO9GD/dj8i9YzuzdTVhoPwt6bGmz56apgwWAERIAY1IcFCAAGFjWADWxBsIkZVuOGoKMzQcOQ0KZSEPFcbcNyrEOCNuCUtikwPNe2UHLGW6Jf0+ZQxTUIpLm1b5/wAjoO1dJOpGfDTG0tnvu7cfM5TE19dSy5eyvDl/I+g6SS+EiJrckp1O7Wrmt3s3ublLPMVQowxM42oTn3cW209uMrKLdl9o1ez+QRr0bTW0rmrR7M1Ix7qUu8oXuqc1eKf0PZETi1wyPIM+eJjecG6cpulCtpfdyns1a6Ts01a6T6q+x1OV/i08GtrFfAZWoRUbKNOO6glaKfW3UmwL/wARfk+RToPBZzLZ6Tl82zeVPX3NNzdKLnNq1oxSv6nXVletfiZ+OyKerVTaV009lZp8U1zBIE1VHB4LtZicQ3ToJVZxjKpNQaehRclKMlKMfaWm+za3W5p5Fn0q+zT6O6exr4fs7Onfu4U6LktMpU4aZSXj8C7l+TQoRslvxbfUmQ4/dmTmcP7uX8Mvkea06OqcJb/nu7dOB6Z2lemlPyfyOJ7PUlKbpve8W1twlw+RhkpQdltW0d72XX+Fhyvdr3s1JIo5NQ7un3f6G0vJ2l9S+0fOyd7kS5GMFwsaZgEI1CuFgFjWFgGAAMLASMqBGocYmg9MQ24rlWIeFDUwpjQDmyDEVlFNtpJK7v0JWzge1cXVxM6daUlSSg6cVKymuaSX4nfrsunM2xQ1yq6Ayu1WfRrVO7ovXb8U48PJcreJjYKL1pPk4382bdDA00tFOKe6c9O93yinz/5KWZYeVGSX+ZqjKaW+mK5M7+DTGKSIld2et9m4JU4pdEdNSpo4bs1jvYj5HYYXEpnqiwyKyXG7RMvK1qqtl3NaqVNu5UyGtTu0mnZ72aK8kraJdqO0zXoyvExsXUjq2ZfwsmoJ9UVF7kzWyLNSKM/F7FqeJRlZhiNmKbDGtzle1M7x09djmsoouniVPk07eDu7fBM6TH4aVW7VvZ33vv6DP+laVbZz06/Zvxu9lz4NnOzZo043yemjoMDunL9Tbt02SSLLRlZPidS08JQ2a6x5P76GqchqtjKfJHIYSSGMxZIABASMTYgMQ7ADEFBBDKCY+5GOTMTUcIQLgIIUxjkJSHYBqPY897b13LERpR3mkrPfZvi79LHoM3dfLzOF7VUNOIp1VG9oxhK993u7u3G1j19G18TcGthdn4uEdMVqqvZT5Ly689+Zof8ARrU67qWlOcKl+drxe68b29C7lVCLpqVO7/UnbUn/AC6WNJe2vFrRLz5be9+p6M2eUmkvyNR2MvLKPdy0Lh7Lj/C0mjqMNVtzONzLMVRqUE/zwUb+KSOhy7FqorXOr0uR5Mab5IZtzqRqRcZJST2afAzqHZmlGbqYeTw83+Pu7aan8UXx8+JkZvgalKWqlXqwpy3lH8ST6pvdLwuOy7B4pvVSxMLq344yT9bv5Hsqz0Yum1wctVHUwySg7TnBVKmzdSe87ro+S8EX6uI0rol6WOUxOCrWU6mJWp/lpqTkvey3l2XSqb1atWpDlCclpk+rS4rwYxZelUY6nK/94Nd1tW6KWMRNKmqey2RkZpmMYLd/fMxySUU2zzxQ6fs0pyja6jOSurrZO1102JMFeSVTqopPwS3+NyGM+9pPQ/ZlGS1Lo1yLGAmlQg9klThzsklHifPObnb92UzNqQ7rFq3CrGUo+Ljxi/v83gdAmY2GpyrVe+atCKcKV1aU7tap78I7JLru+hsRWxm3uTNgkMZIMZmyAACwEjAwMIGIBITAJsLGUUwoaOMkbD0wNgTA2UILGiEKh0JGbnGA7yN0ruNm11s77eNjSAVBuLsaRmxh3cU4cUrrpOPSxZwdSM1rX4XaSvy/4dxuIikrLZxcZR8Lvh8yPLVaE+S1T0+HD63PVknav2Gee/tJxUo4lUb27jZSXN8Vv14Gn2Oz9VEoydqkbKS6+K8DG/aLFTxkqkLpTUW4yaft23fqc/2eclXem6ai38UfQYFFYlpPK5NSPf8AAzVWOl2a+hNDs7Fv2ZSh4KTscL2X7SqMlCo9L4eZ6bl+YxlFNM9EWmWpyjvFkOG7Pxi7ycp/xN29C/KkoImeNhbiYGb53GO0XeXJIcmkQ5Tm/UMzXGJbczzftlip99TipNXjOTSfJtL6M7OjSlN6pcWc7neTOtjqL/y1G0/G0r2954800lqlwaVtSOj7J0JwwdONTaVm7dE3dL0H5EtdCDkvZSUFF89Ozb9628rl7D7Kz9xRytToxVOovZvJwkvy3bbjL14nCU3JNrlv+w3NgcmMi+gTMzC2NYbAEAGANhMmgGgY5oaxDAxrCAhjKQbjUFGaZsETAxrZaGhzYkxlwXHYyRyA5pcWhjYxopNeQGyWqd1wSsr8318kSKCjDSuXxYosTZUslqkM847V4bRXbl+bdeZmdnMEnWnJb+yo+9u51vbnLp1YRlTg5NXva23T6lTstlDowtL8cm5S8Oi9Dv8AR5VLCv4PNOPrKOYZVL8UVuOy7N8XS9mM5bcnudtSwKfFBWQxvfSekODLwWPxdXaU7LwVjcy/LHe8rt9XxNDBZbGK4GtQw6SKSByKscPpRnV6Vppm7VRSxNC6Mc+LXBxCMiGBIV1PTtLbx5Eibb6Jc+b8vA+enjljlUtiiKEEqq7ttL/Mjf8Au0rdOUuGyLyZFFJcNh6J1WS9x4BXEMkIGK4LhYAYwLYCGxgEEBIzPQSPULUedSRsSNjWxrkMlIrWMfqGtkWoLkGsY5yBcjnOyu3ZK12/F2XxaI1VvwXvfA0x48mT9MbCyfUB1uSTk+i+o2nGL/HP3cDRo16EFs02dTB23zkf4RLn7FGpgpyi5T81Hl/UbgMHeVy3iMep7RTt5MsZdaLvZu/FWe3idfHCEFpjsYybCsPpZfoRH1NMuBPQo7GqW5NjoxRIDu2hxRJDouwVaew6WJUOVyjVx8m/wSty4eom0Uk2SzwqkrFKWCnB+w9v0vh/QlWNn/py+A7+2zf+VJ+hhkhjmqki1aK3fW2mnF/AlhUT4NPyZBX76b2pW82QSwE+LVmc7J2+N+hj0o0biuY8qs6corU7SlCFnvxaQ+GZS/NBW3tZ725bPmeSfR5Y78k6fY07ibKlPHQltez6S2J7nkkpRdNUFUOuIaFshMAtguNbA2JyAzRXBcDZ5TcLGtibMzMsQ2+7i+O8n4dDfBhllmoxBuietjYp2itT6/lQqcZz4ya8FsLA4Pbga1DCn0OHocWPxb+5DkYGeYadPDTq05SU6aVR23coQkpTj70mdVgcBTlFSXBpNe8gxWD1QknwkpJrqmhvZyrJ4Wk2rPu4Jq97NKzV/Bqx0IxSXBk3uXp4GC/KiNUoJ/hRYqVispblbeB7lyjh49C3DDxKlKRYhULSRLse6Nnt70SqnZDqTFN9PQqiSOpX2tzBTg3xDGnd+JIo/AVMdoasPfiiVYaPMfGQJVCqRNsinTgiPV0RLOaK1SoS6GidLmyhj8SuERVazK6p3M3LwWl5OdzmpJ4jDQX5qk5P+GNOV/maSwrfIr4ulfMsPHlCjiaj824R+p0caaE4WkCluzAqYHwI6bnSfNx5xf06HSqimU8ZhlYwy9PGSpo0U7IKdRSSa4MTKuGemTjye68y0fOZ8TxzcWS1QBBYLmIGTcVwDWzCjcNSaSbfBJt+RkZfFzk5PjJ3LObVLUmv1Wj6vf4XDlUDu9qxVGU/fYznybuDpbF+ECvhVsW7nYRmwz4PyMDsU/8A4+j4Ka9ynKxtVKhj9l7LB0kuGlv1k39Sr2Jrc06goRH2HxiCLAkSRmJIOgoRNDEEirldUR0aLC2KkWVXt700/v0FLFb367kTpMHcMdsKQ54kXfDVh2Hug3DYWobIdYLQmBWcR8USaRs9iRmPR9rMpv8A08PTj751JP8A2G4mYGAn/jcTLosNT9Iyl/uNqEimyaLdNkWJWxJTG1hvgS5MHExtNPxJ7keYoUJXV+p8/wB0jUlI18DmwNjdQNRx3IRmXGtgbGtgkbmfm8r6I9W36L+poZbDYycfK9ZL9Mb+r/obuXR2Pp+hjpwRMZcmvh1sWJcCKiiaXA9pJQxlS0JPom/RFHs27YamtDpWjbu223B3d1dkee4zRTq9VTnJedmTdna0qlCnOVtU4Qk7cLtXYJbA+TbpxJNAqaJbGiQrIdI+KH6QJBQWS0yxBFeCJ4MpEMdNDUxladiFTCwSLVyOZGpjkFjGNBjEkUR6gKh2QuJBWRelEp4hbEyQJnL5ZW/xGLf/AHoR/wDWjT/mb2Gnc5Gnrpd7Oace/r1ZwvxcNUYJ+/Szostq3RD5KXBt02KrwGUmSTNPBBjZgitQfs+Wxdx0Shhua8Tj91jeK/Zmq4JGwDmhrPmmgMkDEI3NjHr/AP6X5R+R0eX8BCPqel+TD9kYvlmxSJZcBCPUScpn29SKe6k0mnwa1R2ZsZRTUYRjFWjFKKXRLghCEhfUbFMniIRshDgAEIQ4fAQgQMjxBDAQgYIliSxEIAJYkghFIkaynieYhEyKRwmdVpSi7u+mrGEfCKpp29Wa+SP2UIRk+So8HRUCaQhGi4EZ+MWzMqh+KXu+ohHL7n8h/g0XBMxjCI+XYH//2Q==', // Placeholder image path
            name: 'Jon',
            location: 'Active',
            cuisine: '50',
            vendorDetail: <div> <div onClick={() => setSelectedVendor(true)} > <Link href={""}  className={"font-bold text-orange-500 "}>View detail</Link> </div> </div>,
        }
    ];

    const driverstableData = [
        {
            image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQDxUQEBAPDxAPFQ8PDw8QEA8VDw8PFRUWFxUVFhYYHSggGBolHRUWITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGBAQGi8dHx0tLS0tLSstLTAtLS0tNy0tLS0tLS0tLS0tLS0tNy0tLSstLS0tLSstLS0tKy0tLS0tLf/AABEIANMA7wMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAABAAIDBAUGB//EAEAQAAIBAgQDBQYDBQcEAwAAAAABAgMRBAUSITFBUQYTYXGRIoGhscHwMkJSB2Jy0eEUIyRDU8LxFWOCkiUzNP/EABoBAAMBAQEBAAAAAAAAAAAAAAABAgMFBAb/xAArEQACAgEDAwIFBQEAAAAAAAAAAQIRAxIhMQQFQSJREzNCYYEycZHR8CP/2gAMAwEAAhEDEQA/AOrHIaFHxSOkOQRqY5FpiBYQ4BQwCCAQCCIIwAJsq5lmNPD03UqSUYx6s8r7RducRXbhQk6NPh7LtUkvdul97G+Hp55X6RNpcnp+YZvh6H/3VqdNvgpSV37uJhYr9oGApuynOo/3Kc7erSPJJKcnd6pSfGcnJv5lilgdXJ26tWX36HSh26P1NszeQ9CqftMoJ7Yes09tTlBL4XNXKu2eHrK8pQpcPxTjz+p5e8tVnvHfotivRwsY7S3e97cr+OxpLt2JqlsL4r9j3mhiIVFqhKM11i018CVM8Ly7GVaM1OlVnTa6Sa38Vw9253+RdtG5KnioxWp2jWhtFP8Afjy816I8WfoJ41a3RUZqR3MWPIKcyaLOc0Nj7gEwAIKCNHCAAUxoUMBMDHDWADbCCxrIGQsQhEljkFAQSkIIhIJaAQhCGACrmePp4elKrVdowV/Fvkl4ls8p/aFm8sRif7PBtUqG0rfmqc/5eptgxfEnpButzE7Q9oK2OquUnopJtU6fKK5X6vxKeAy5ze265yfy8WTYHBKcv3Vs7dei8Tfw+HVtrJLl+WPnbi/D/k+ghCMFUVSMHbK2HwUIbKLk/Hn7/wCRanhtryaiuS22+/tBnU3tHdr73/kVcS1xk3N9E9vU0sdFfGVYrhHX4vh8TMhUnUdrW8uCNKjgalaaSppX2V02/ibEMvhQi1K3eLirbICWc/XwUVTU20pp20vVfzI6UbxunZ9N7Ly/oXcWpTk3tHk7dBk8HLTZTTtyfHzt98B3tQknydL2J7SuElhq7el7UpPk3yv0Z6LCR4JOcoPe6t8GesdjM6/tWHTb/vIezPx6P3nG67p9L1rhm0XZ1CYhsGOOYMKExCEIAkIKABMAWBgA1gEwkjIBMFwkliHIaOQ0A5BGjjRCCAQRgVMzxSpUZVHwimzxqUnOb/XUcpyl0XFy+J6N+0HE6cMqadu8kk/FJNv6ep5zrUFf80/hBPh73b0Or2+GzkRN+DRw9JJKK2X3dktao5NQjtFbXXPyM6jWctlzvd9IriaWX0ZVJKK/NZeUft/M6dkLcsYag5exThqb90Vfq+ZuZZ2QnN6qk/clZHRZDkUacU2rt7tvidJSw9hRbZbSRg4DIIUrNLdGL2j7POTdRX3d2j0CNEjxWHTVmi9JNo8cqYJRT1Jv7+ZlY5bbN3XPnb7+R6dm+Qak3H0PPM8y6dNvZrx5eAm6HRzNetq2lx69eht/s9zHuMWoSfsVvY/8uX34mHiaL4pe7oPwb0zjPnGUX7kzDOlKDi/JK5Pe6ZIQYaV4p9UmTnzjNGIQbAEIQkIVwAIGEAABgCxrEMrocNQTMscICChgFDxo4tCFYQUxFAcH2+vOtTh+6/WTt9DhMZU1VG1wW0fKJ2XbyvpxG36Ipe9s5XD4VtX/AIkd7oo/8kZ5OSTAw2b5tqK8Fv8AQ7bsVgLzc3HZbI5LC071NMVdRfq+nwS950GBhmdKFqamlu1p7p/W7PXpsUXR6xhaKaLionl+XdpswpztVjtdXUoWfD0PQ8uzDvIqXUtUhST5NFRGzplLH4twg2uKRwmIz/MZTenWo39lRhd2t5FakSos7zEwVjms3yyFRPZGZTxGaz3etL95U0/SxLDE42D/AL6nrg/zQS1L0ImjSJwHaDK3Slw23X398jDw1Pe3U9R7Q4eNWk3blc84jC1S3XdHnnwOSpnsWTO9GD/dj8i9YzuzdTVhoPwt6bGmz56apgwWAERIAY1IcFCAAGFjWADWxBsIkZVuOGoKMzQcOQ0KZSEPFcbcNyrEOCNuCUtikwPNe2UHLGW6Jf0+ZQxTUIpLm1b5/wAjoO1dJOpGfDTG0tnvu7cfM5TE19dSy5eyvDl/I+g6SS+EiJrckp1O7Wrmt3s3ublLPMVQowxM42oTn3cW209uMrKLdl9o1ez+QRr0bTW0rmrR7M1Ix7qUu8oXuqc1eKf0PZETi1wyPIM+eJjecG6cpulCtpfdyns1a6Ts01a6T6q+x1OV/i08GtrFfAZWoRUbKNOO6glaKfW3UmwL/wARfk+RToPBZzLZ6Tl82zeVPX3NNzdKLnNq1oxSv6nXVletfiZ+OyKerVTaV009lZp8U1zBIE1VHB4LtZicQ3ToJVZxjKpNQaehRclKMlKMfaWm+za3W5p5Fn0q+zT6O6exr4fs7Onfu4U6LktMpU4aZSXj8C7l+TQoRslvxbfUmQ4/dmTmcP7uX8Mvkea06OqcJb/nu7dOB6Z2lemlPyfyOJ7PUlKbpve8W1twlw+RhkpQdltW0d72XX+Fhyvdr3s1JIo5NQ7un3f6G0vJ2l9S+0fOyd7kS5GMFwsaZgEI1CuFgFjWFgGAAMLASMqBGocYmg9MQ24rlWIeFDUwpjQDmyDEVlFNtpJK7v0JWzge1cXVxM6daUlSSg6cVKymuaSX4nfrsunM2xQ1yq6Ayu1WfRrVO7ovXb8U48PJcreJjYKL1pPk4382bdDA00tFOKe6c9O93yinz/5KWZYeVGSX+ZqjKaW+mK5M7+DTGKSIld2et9m4JU4pdEdNSpo4bs1jvYj5HYYXEpnqiwyKyXG7RMvK1qqtl3NaqVNu5UyGtTu0mnZ72aK8kraJdqO0zXoyvExsXUjq2ZfwsmoJ9UVF7kzWyLNSKM/F7FqeJRlZhiNmKbDGtzle1M7x09djmsoouniVPk07eDu7fBM6TH4aVW7VvZ33vv6DP+laVbZz06/Zvxu9lz4NnOzZo043yemjoMDunL9Tbt02SSLLRlZPidS08JQ2a6x5P76GqchqtjKfJHIYSSGMxZIABASMTYgMQ7ADEFBBDKCY+5GOTMTUcIQLgIIUxjkJSHYBqPY897b13LERpR3mkrPfZvi79LHoM3dfLzOF7VUNOIp1VG9oxhK993u7u3G1j19G18TcGthdn4uEdMVqqvZT5Ly689+Zof8ARrU67qWlOcKl+drxe68b29C7lVCLpqVO7/UnbUn/AC6WNJe2vFrRLz5be9+p6M2eUmkvyNR2MvLKPdy0Lh7Lj/C0mjqMNVtzONzLMVRqUE/zwUb+KSOhy7FqorXOr0uR5Mab5IZtzqRqRcZJST2afAzqHZmlGbqYeTw83+Pu7aan8UXx8+JkZvgalKWqlXqwpy3lH8ST6pvdLwuOy7B4pvVSxMLq344yT9bv5Hsqz0Yum1wctVHUwySg7TnBVKmzdSe87ro+S8EX6uI0rol6WOUxOCrWU6mJWp/lpqTkvey3l2XSqb1atWpDlCclpk+rS4rwYxZelUY6nK/94Nd1tW6KWMRNKmqey2RkZpmMYLd/fMxySUU2zzxQ6fs0pyja6jOSurrZO1102JMFeSVTqopPwS3+NyGM+9pPQ/ZlGS1Lo1yLGAmlQg9klThzsklHifPObnb92UzNqQ7rFq3CrGUo+Ljxi/v83gdAmY2GpyrVe+atCKcKV1aU7tap78I7JLru+hsRWxm3uTNgkMZIMZmyAACwEjAwMIGIBITAJsLGUUwoaOMkbD0wNgTA2UILGiEKh0JGbnGA7yN0ruNm11s77eNjSAVBuLsaRmxh3cU4cUrrpOPSxZwdSM1rX4XaSvy/4dxuIikrLZxcZR8Lvh8yPLVaE+S1T0+HD63PVknav2Gee/tJxUo4lUb27jZSXN8Vv14Gn2Oz9VEoydqkbKS6+K8DG/aLFTxkqkLpTUW4yaft23fqc/2eclXem6ai38UfQYFFYlpPK5NSPf8AAzVWOl2a+hNDs7Fv2ZSh4KTscL2X7SqMlCo9L4eZ6bl+YxlFNM9EWmWpyjvFkOG7Pxi7ycp/xN29C/KkoImeNhbiYGb53GO0XeXJIcmkQ5Tm/UMzXGJbczzftlip99TipNXjOTSfJtL6M7OjSlN6pcWc7neTOtjqL/y1G0/G0r2954800lqlwaVtSOj7J0JwwdONTaVm7dE3dL0H5EtdCDkvZSUFF89Ozb9628rl7D7Kz9xRytToxVOovZvJwkvy3bbjL14nCU3JNrlv+w3NgcmMi+gTMzC2NYbAEAGANhMmgGgY5oaxDAxrCAhjKQbjUFGaZsETAxrZaGhzYkxlwXHYyRyA5pcWhjYxopNeQGyWqd1wSsr8318kSKCjDSuXxYosTZUslqkM847V4bRXbl+bdeZmdnMEnWnJb+yo+9u51vbnLp1YRlTg5NXva23T6lTstlDowtL8cm5S8Oi9Dv8AR5VLCv4PNOPrKOYZVL8UVuOy7N8XS9mM5bcnudtSwKfFBWQxvfSekODLwWPxdXaU7LwVjcy/LHe8rt9XxNDBZbGK4GtQw6SKSByKscPpRnV6Vppm7VRSxNC6Mc+LXBxCMiGBIV1PTtLbx5Eibb6Jc+b8vA+enjljlUtiiKEEqq7ttL/Mjf8Au0rdOUuGyLyZFFJcNh6J1WS9x4BXEMkIGK4LhYAYwLYCGxgEEBIzPQSPULUedSRsSNjWxrkMlIrWMfqGtkWoLkGsY5yBcjnOyu3ZK12/F2XxaI1VvwXvfA0x48mT9MbCyfUB1uSTk+i+o2nGL/HP3cDRo16EFs02dTB23zkf4RLn7FGpgpyi5T81Hl/UbgMHeVy3iMep7RTt5MsZdaLvZu/FWe3idfHCEFpjsYybCsPpZfoRH1NMuBPQo7GqW5NjoxRIDu2hxRJDouwVaew6WJUOVyjVx8m/wSty4eom0Uk2SzwqkrFKWCnB+w9v0vh/QlWNn/py+A7+2zf+VJ+hhkhjmqki1aK3fW2mnF/AlhUT4NPyZBX76b2pW82QSwE+LVmc7J2+N+hj0o0biuY8qs6corU7SlCFnvxaQ+GZS/NBW3tZ725bPmeSfR5Y78k6fY07ibKlPHQltez6S2J7nkkpRdNUFUOuIaFshMAtguNbA2JyAzRXBcDZ5TcLGtibMzMsQ2+7i+O8n4dDfBhllmoxBuietjYp2itT6/lQqcZz4ya8FsLA4Pbga1DCn0OHocWPxb+5DkYGeYadPDTq05SU6aVR23coQkpTj70mdVgcBTlFSXBpNe8gxWD1QknwkpJrqmhvZyrJ4Wk2rPu4Jq97NKzV/Bqx0IxSXBk3uXp4GC/KiNUoJ/hRYqVispblbeB7lyjh49C3DDxKlKRYhULSRLse6Nnt70SqnZDqTFN9PQqiSOpX2tzBTg3xDGnd+JIo/AVMdoasPfiiVYaPMfGQJVCqRNsinTgiPV0RLOaK1SoS6GidLmyhj8SuERVazK6p3M3LwWl5OdzmpJ4jDQX5qk5P+GNOV/maSwrfIr4ulfMsPHlCjiaj824R+p0caaE4WkCluzAqYHwI6bnSfNx5xf06HSqimU8ZhlYwy9PGSpo0U7IKdRSSa4MTKuGemTjye68y0fOZ8TxzcWS1QBBYLmIGTcVwDWzCjcNSaSbfBJt+RkZfFzk5PjJ3LObVLUmv1Wj6vf4XDlUDu9qxVGU/fYznybuDpbF+ECvhVsW7nYRmwz4PyMDsU/8A4+j4Ka9ynKxtVKhj9l7LB0kuGlv1k39Sr2Jrc06goRH2HxiCLAkSRmJIOgoRNDEEirldUR0aLC2KkWVXt700/v0FLFb367kTpMHcMdsKQ54kXfDVh2Hug3DYWobIdYLQmBWcR8USaRs9iRmPR9rMpv8A08PTj751JP8A2G4mYGAn/jcTLosNT9Iyl/uNqEimyaLdNkWJWxJTG1hvgS5MHExtNPxJ7keYoUJXV+p8/wB0jUlI18DmwNjdQNRx3IRmXGtgbGtgkbmfm8r6I9W36L+poZbDYycfK9ZL9Mb+r/obuXR2Pp+hjpwRMZcmvh1sWJcCKiiaXA9pJQxlS0JPom/RFHs27YamtDpWjbu223B3d1dkee4zRTq9VTnJedmTdna0qlCnOVtU4Qk7cLtXYJbA+TbpxJNAqaJbGiQrIdI+KH6QJBQWS0yxBFeCJ4MpEMdNDUxladiFTCwSLVyOZGpjkFjGNBjEkUR6gKh2QuJBWRelEp4hbEyQJnL5ZW/xGLf/AHoR/wDWjT/mb2Gnc5Gnrpd7Oace/r1ZwvxcNUYJ+/Szostq3RD5KXBt02KrwGUmSTNPBBjZgitQfs+Wxdx0Shhua8Tj91jeK/Zmq4JGwDmhrPmmgMkDEI3NjHr/AP6X5R+R0eX8BCPqel+TD9kYvlmxSJZcBCPUScpn29SKe6k0mnwa1R2ZsZRTUYRjFWjFKKXRLghCEhfUbFMniIRshDgAEIQ4fAQgQMjxBDAQgYIliSxEIAJYkghFIkaynieYhEyKRwmdVpSi7u+mrGEfCKpp29Wa+SP2UIRk+So8HRUCaQhGi4EZ+MWzMqh+KXu+ohHL7n8h/g0XBMxjCI+XYH//2Q==', // Placeholder image path
            name: 'Mr bean',
            location: 'Active',
            cuisine: '90',
            driversDetail: <div> <div onClick={() => setSelectedDriver(true)} > <Link href={"#"} className={"font-bold text-orange-500 "}>View detail</Link> </div> </div>,
        }
    ];

    return (

        <div>

            <h3 className={"my-2 font-bold text-4xl"}>Resources</h3>
            <div className={"flex justify-content-end  m-4"}>
                {/*<div className=" mx-4 flex justify-content-center">*/}
                {/*    <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name"*/}
                {/*              placeholder="Vendor" className="w-full md:w-14rem" />*/}
                {/*</div>*/}
                <Link href={""}>
                    <Button onClick={() => setVisible(true)} style={{ backgroundColor: '#FF8A38', border: "none", color: 'white',  margin:"2px" }} primary>
                        Add Resource
                    </Button>
                </Link>

            </div>


            <TabView>
                <TabPanel header={"Vendor"}>
                    <table className="table-auto w-full">
                        <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                        <tr>

                            <th className="p-2 whitespace-nowrap">
                                <div className="font-semibold text-left">Name</div>
                            </th>
                            <th className="p-2 whitespace-nowrap">
                                <div className="font-semibold text-center">Location</div>
                            </th>
                            <th className="p-2 whitespace-nowrap">
                                <div className="font-semibold text-center">Cuisine</div>
                            </th>
                            <th className="p-2 whitespace-nowrap">
                                <div className="font-semibold text-center">Vendor details</div>
                            </th>
                            {/*<th className="p-2 whitespace-nowrap">*/}
                            {/*    <div className="font-semibold text-center">Drivers</div>*/}
                            {/*</th>*/}

                        </tr>
                        </thead>
                        <tbody className="text-sm divide-y divide-gray-100">
                        {tableData.map((row, index) => (
                            <tr key={index}>

                                <td className="p-2 d-flex flex justify-content-start align-items-center">
                                    <div className="p-2">
                                        <img style={{ borderRadius: '10px' }} src={row.image} alt="Product" width={35} height={30} />
                                    </div>
                                    <div className="text-left">{row.name}</div>
                                </td>

                                <td className="p-2 whitespace-nowrap">
                                    <div className="text-center">{row.location}</div>
                                </td>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="text-center">{row.cuisine}</div>
                                </td>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="text-center">{row.vendorDetail}</div>
                                </td>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="text-center">{row.drivers}</div>
                                </td>
                                {/*<td className="p-2 whitespace-nowrap">*/}
                                {/*    <div className="text-center">{row.vendor}</div>*/}
                                {/*</td>*/}
                                <td className="p-2 whitespace-nowrap">
                                    <span className="pa pa-icon"></span>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </TabPanel>

                <TabPanel header={"Drivers"}>
                    <table className="table-auto w-full">
                        <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                        <tr>

                            <th className="p-2 whitespace-nowrap">
                                <div className="font-semibold text-left">Name</div>
                            </th>
                            <th className="p-2 whitespace-nowrap">
                                <div className="font-semibold text-center">Location</div>
                            </th>
                            <th className="p-2 whitespace-nowrap">
                                <div className="font-semibold text-center">Cuisine</div>
                            </th>
                            {/*<th className="p-2 whitespace-nowrap">*/}
                            {/*    <div className="font-semibold text-center">Drivers details</div>*/}
                            {/*</th>*/}
                            <th className="p-2 whitespace-nowrap">
                                <div className="font-semibold text-center">Drivers details</div>
                            </th>

                        </tr>
                        </thead>
                        <tbody className="text-sm divide-y divide-gray-100">
                        {driverstableData.map((row, index) => (
                            <tr key={index}>

                                <td className="p-2 d-flex flex justify-content-start align-items-center">
                                    <div className="p-2">
                                        <img style={{ borderRadius: '10px' }} src={row.image} alt="Product" width={35} height={30} />
                                    </div>
                                    <div className="text-left">{row.name}</div>
                                </td>

                                <td className="p-2 whitespace-nowrap">
                                    <div className="text-center">{row.location}</div>
                                </td>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="text-center">{row.cuisine}</div>
                                </td>
                                {/*<td className="p-2 whitespace-nowrap">*/}
                                {/*    <div className="text-center">{row.vendorDetail}</div>*/}
                                {/*</td>*/}
                                <td className="p-2 whitespace-nowrap">
                                    <div className="text-center">{row.driversDetail}</div>
                                </td>
                                {/*<td className="p-2 whitespace-nowrap">*/}
                                {/*    <div className="text-center">{row.vendor}</div>*/}
                                {/*</td>*/}
                                <td className="p-2 whitespace-nowrap">
                                    <span className="pa pa-icon"></span>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </TabPanel>

            </TabView>



            {/* Dialoge Box*/}
            <div className=" flex justify-content-center">
                <div>
                    {/*<Button label="Show Dialog" icon="pi pi-external-link" onClick={() => setVisible(true)} />*/}
                    <Dialog header="Vendor Details" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)}>
                        <div className="p-fluid">
                            <div className="p-field my-2 ">
                                <label htmlFor="name" className={"py-2"}>Name</label>
                                <InputText id="name" />
                            </div>
                            <div className="p-field my-2">
                                <label htmlFor="location">Location (city, state)</label>
                                <InputText id="location" className={"mb-2"} />
                            </div>
                            <div className="p-field my-2">
                                <label htmlFor="cuisine">Cuisine</label>
                                <InputText id="cuisine" />
                            </div>
                            <div className="p-field my-2">
                                <label htmlFor="details">Vendor details</label>
                                <InputTextarea id="details" rows={3} />
                            </div>
                            <div className="p-field my-2">
                                <label htmlFor="pocName">POC name</label>
                                <InputText id="pocName" />
                            </div>
                            <div className="p-field my-2">
                                <label htmlFor="pocNumber">POC number</label>
                                <InputText id="pocNumber" />
                            </div>
                            <div className="p-field my-2">
                                <label htmlFor="restaurantNumber">Restaurant number</label>
                                <InputText id="restaurantNumber" />
                            </div>
                            <div className="p-field my-2">
                                <label htmlFor="menu">Menu</label>
                                <InputTextarea id="menu" rows={3} />
                            </div>
                        </div>
                        <div className={"flex justify-content-center "}>
                            <Button onClick={() => setVisible(true)} style={{ backgroundColor: '#FF8A38', border: "none", color: 'white',  margin:"2px" }} primary>
                                Submit
                            </Button>


                        </div>

                    </Dialog>
                </div>
            </div>

            <div>
                <Dialog header="" visible={selectedVendor} style={{ width: '50vw' }} onHide={() => setSelectedVendor(false)}>
                    <h2 className="text-2xl font-bold mb-4">Vendor Details</h2>
                    <div className="bg-white shadow-md rounded-lg overflow-hidden">
                        {vendors.map((vendor) => (
                            <div key={vendor.id} className="border-b last:border-0 p-4">
                                <h3 className="text-xl font-semibold">{vendor.name}</h3>
                                <p><span className="font-medium">POC Name:</span> {vendor.pocName}</p>
                                <p><span className="font-medium">POC Number:</span> {vendor.pocNumber}</p>
                                <p><span className="font-medium">Restaurant Number:</span> {vendor.restaurantNumber}</p>
                                <p className="font-medium">Menu:</p>
                                <ul className="list-disc list-inside ml-4">
                                    {vendor.menu.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                </Dialog>
            </div>

            <div>
                <Dialog header="" visible={selectedDriver} style={{ width: '50vw' }} onHide={() => setSelectedDriver(false)}>
                    <h2 className="text-2xl font-bold mb-4">Drivers Details</h2>
                    <div className="bg-white shadow-md rounded-lg overflow-hidden">
                        {drivers.map((vendor) => (
                            <div key={vendor.id} className="border-b last:border-0 p-4">
                                {/*<h3 className="text-xl font-semibold">{vendor.name}</h3>*/}
                                <p><span className="font-medium">Name:</span> {vendor.pocName}</p>
                                <p><span className="font-medium">Phoen Number:</span> {vendor.pocNumber}</p>
                                <p><span className="font-medium">Details:</span> Detail here</p>
                                <p className="font-medium">Payment:</p>
                                <ul className="list-disc list-inside ml-4">
                                    {vendor.menu.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </Dialog>
            </div>
    </div>
    );
};

export default ProductTable;
