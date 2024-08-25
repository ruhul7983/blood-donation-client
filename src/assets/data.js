const district = ["Dhaka", "Gazipur", "Kishoreganj", "Manikganj", "Munshiganj", "Narayanganj", "Narsingdi", "Tangail", "Faridpur", "Gopalganj", "Madaripur", "Rajbari", "Shariatpur", "Bogra", "Jaipurhat", "Naogaon", "Natore", "Nawabganj", "Pabna", "Rajshahi", "Sirajganj", "Bagerhat", "Chuadanga", "Jessore", "Jhenaidah", "Khulna", "Kushtia", "Magura", "Meherpur", "Narail", "Satkhira", "Barisal", "Bhola", "Jhalokathi", "Patuakhali", "Pirojpur", "Barguna", "Sylhet", "Moulvibazar", "Habiganj", "Sunamganj", "Dinajpur", "Gaibandha", "Kurigram", "Lalmonirhat", "Nilphamari", "Panchagarh", "Rangpur", "Thakurgaon", "Jamalpur", "Mymensingh", "Netrokona", "Sherpur"];
export const bloodGroup = ['A+', "B+", "AB+", "O+", 'A-', "B-", "AB-", "O-"];
export const getTodayDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
}
export default district;