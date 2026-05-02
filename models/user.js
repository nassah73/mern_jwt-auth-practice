const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: { 
        type: String, 
        required: true, 
        unique: true, // باش ما يكونش جوج عندهم نفس السمية
        trim: true 
    },
    email: { 
        type: String, 
        required: true, 
        unique: true, // باش ما يكونش جوج عندهم نفس الإيميل
        lowercase: true 
    },
    password: { 
        type: String, 
        required: true 
    },
    role: { 
        type: String, 
        default: 'student' // كنعطيو دور افتراضي
    }
}, { timestamps: true }); // هادي كتزيد لينا createdAt و updatedAt اوتوماتيكياً

module.exports = mongoose.model('User', UserSchema);