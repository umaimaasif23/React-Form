import React, { useState } from 'react';

function MultiStepForm() {
  const [step, setStep] = useState(1);

  // Form ka sara data store karne ke liye state
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    course: ''
  });

  // Error messages dikhane ke liye state
  const [error, setError] = useState('');

  // Input change hone par state update karna
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(''); // Jaise hi user type kare, error hata do
  };

  // Next button par validation check
  const handleNext = () => {
    if (step === 1) {
      if (!formData.fullName || !formData.email || !formData.phone) {
        setError('Please fill in all personal fields before proceeding!');
        return;
      }
    } else if (step === 2) {
      if (!formData.address || !formData.city || !formData.course) {
        setError('Please fill in all address & course fields!');
        return;
      }
    }
    setError('');
    setStep(step + 1);
  };

  const handlePrev = () => {
    setError('');
    setStep(step - 1);
  };

  // Final Submit function
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted successfully! Check console for data.');
    console.log('Final Form Data:', formData);
  };

  return (
    <div style={styles.pageWrapper}>
      <div style={styles.formCard}>
        
        {/* Header & Progress */}
        <h2 style={styles.heading}>Multi-Step Registration</h2>
     

        {/* Error Alert */}
        {error && <div style={styles.errorAlert}>{error}</div>}

        <form onSubmit={handleSubmit}>
          
          {/* STEP 1: Personal Info */}
          {step === 1 && (
            <div style={styles.stepContainer}>
              <h3 style={styles.subHeading}>Personal Information</h3>
              <div style={styles.inputGroup}>
                <label style={styles.label}>Full Name</label>
                <input 
                  type="text" 
                  name="fullName" 
                  value={formData.fullName} 
                  onChange={handleChange} 
                  placeholder="Enter your name"
                  style={styles.input}
                />
              </div>
              <div style={styles.inputGroup}>
                <label style={styles.label}>Email Address</label>
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  placeholder="Enter your email"
                  style={styles.input}
                />
              </div>
              <div style={styles.inputGroup}>
                <label style={styles.label}>Phone Number</label>
                <input 
                  type="tel" 
                  name="phone" 
                  value={formData.phone} 
                  onChange={handleChange} 
                  placeholder="Enter phone number"
                  style={styles.input}
                />
              </div>
            </div>
          )}

          {/* STEP 2: Address & Course */}
          {step === 2 && (
            <div style={styles.stepContainer}>
              <h3 style={styles.subHeading}>Address & Preferences</h3>
              <div style={styles.inputGroup}>
                <label style={styles.label}>Street Address</label>
                <input 
                  type="text" 
                  name="address" 
                  value={formData.address} 
                  onChange={handleChange} 
                  placeholder="Enter your address"
                  style={styles.input}
                />
              </div>
              <div style={styles.inputGroup}>
                <label style={styles.label}>City</label>
                <input 
                  type="text" 
                  name="city" 
                  value={formData.city} 
                  onChange={handleChange} 
                  placeholder="Enter city"
                  style={styles.input}
                />
              </div>
              <div style={styles.inputGroup}>
                <label style={styles.label}>Selected Course</label>
                <input 
                  type="text" 
                  name="course" 
                  value={formData.course} 
                  onChange={handleChange} 
                  placeholder="e.g. React.js Development"
                  style={styles.input}
                />
              </div>
            </div>
          )}

          {/* STEP 3: Review & Summary */}
          {step === 3 && (
            <div style={styles.stepContainer}>
              <h3 style={styles.subHeading}>Review Your Details</h3>
              <div style={styles.reviewBox}>
                <p style={styles.end}><strong>Full Name:</strong> {formData.fullName}</p>
                <p style={styles.end}><strong>Email:</strong> {formData.email}</p>
                <p style={styles.end}><strong>Phone:</strong> {formData.phone}</p>
                <p style={styles.end}><strong>Address:</strong> {formData.address}</p>
                <p style={styles.end}><strong>City:</strong> {formData.city}</p>
                <p style={styles.end}><strong>Course:</strong> {formData.course}</p>
              </div>
            </div>
          )}

          {/* Navigation Buttons (Side-by-side aur barabar me) */}
          <div style={styles.buttonContainer}>
            {step > 1 && (
              <button type="button" onClick={handlePrev} style={styles.secondaryButton}>
                Preview
              </button>
            )}

            {step < 3 && (
              <button type="button" onClick={handleNext} style={styles.primaryButton}>
                Next
              </button>
            )}

            {step === 3 && (
              <button type="submit" style={styles.submitButton}>
                Submit
              </button>
            )}
          </div>

        </form>
      </div>
    </div>
  );
}

// Custom #6232a8 & Pure White Clean Styling Object
const styles = {

   // body:{fontFamily: 'Poppins, sans-serif', background: '#f0f4f8', margin: 0, padding: 0},
  pageWrapper: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #6232a8 0%, #3b176d 100%)', // Aapka diya hua color theme
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'poppins',
    padding: '10px'
  },
  formCard: {
    width: '100%',
    maxWidth: '480px',
    background: 'white', // Form ka background bilkul white
    borderRadius: '16px',
    padding: '30px',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.25)',
    color: 'black' // Dark text for white background readability
  },
  heading: {
    textAlign: 'center',
    marginBottom: '25px',
    fontSize: '37px',
    fontFamily: 'Poppins, sans-serif',
    fontWeight: '900',
    color: '#6232a8'
  },
  subHeading: {
    fontSize: '18px',
    fontWeight: '800',
    color: 'black',
    fontFamily: 'Poppins, sans-serif',
    marginBottom: '20px'
  },

  errorAlert: {
    background: '#fee2e2',
    border: '1px solid #f87171',
    color: '#dc2626',
    padding: '10px',
    borderRadius: '8px',
    fontSize: '13px',
    marginBottom: '15px',
    textAlign: 'center'
  },
  stepContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px'
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px'
  },
  label: {
    fontSize: '15px',
    fontWeight: '800',
    color: '#6232a8',
    fontFamily: 'Poppins, sans-serif'
  },
  input: {
    padding: '12px 14px',
    background: 'white',
    border: '1px solid #6232a8',
    borderRadius: '8px',
    color: '#6232a8',
    fontSize: '15px',
    outline: 'none',
    transition: 'all 0.3s ease'
  },
  reviewBox: {
    background: '#f1f5f9',
    padding: '15px',
    borderRadius: '10px',
    border: '1px solid #e2e8f0',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    fontSize: '14px',
    color: '#6232a8'
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '12px',
    marginTop: '25px',
    fontFamily: 'Poppins, sans-serif'
  },
  primaryButton: {
    background: '#6232a8', // Button theme color
    color: 'white',
    border: 'none',
    padding: '20px 104px',
    borderRadius: '8px',
    fontSize: '20px',
    fontWeight: '700',
    cursor: 'pointer',
    boxShadow: '0 4px 12px rgba(98, 50, 168, 0.3)'
  },
  secondaryButton: {
    background: '#6232a8',
    color: 'white',
    border: 'none',
    padding: '20px 75px',
    borderRadius: '8px',
    fontSize: '20px',
    fontWeight: '700',
    cursor: 'pointer'
  },
  submitButton: {
    background: '#6232a8', // Green for final submit
    color: 'white',
    border: 'none',
    padding: '20px 75px',
    borderRadius: '8px',
    fontSize: '20px',
    fontWeight: '700',
    cursor: 'pointer',
    fontFamily: 'Poppins, sans-serif'
      },

      end:{
fontFamily: 'Poppins, sans-serif',
      }
};

export default MultiStepForm;