const setTestimonials = testimonial => 
    Promise.resolve({
        type:"SET_TESTIMONIAL",
        payload:testimonial,
    });


export {setTestimonials}




