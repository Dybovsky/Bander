function signUpValidation(newUser, artist, venue, avatar) {

    if (Object.values(newUser) === null || undefined || "") {
        localStorage.setItem('msg',"Please fill all the fields")
        return false
    };

    if (newUser.isArtist) {
        if (Object.values(artist) === null || undefined || "") {
            localStorage.setItem('msg',"Please fill all the artist fields")
            return false
        };
    }

    if (newUser.isOwner) {
        if (Object.values(venue) === null || undefined || "") {
            localStorage.setItem('msg',"Please fill all the venue fields")
            return false
        };
    }

    if (avatar) {
        if (avatar.type !== "image/jpeg") {
            if (avatar.type !== "image/png") {
                localStorage.setItem('msg',"Please select a Photo in jpeg or png format");
                return false
            }
        };
    } else {
        localStorage.setItem('msg',"Please select a Photo");
        return false
    }

    return true
}

export default signUpValidation;