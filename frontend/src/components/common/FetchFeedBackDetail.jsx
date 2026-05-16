import React from 'react';

function FetchFeedBackDetail({ feedbackArray }) {
  console.log(feedbackArray)
  // Helper: render star rating
  function getStars(rating) {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(
        <span key={i} style={{ color: "#FFD700", fontSize: "18px" }}>
          ★
        </span>
      );
    }
    return stars;
  }

  // No data? Show empty state
  if (!feedbackArray || feedbackArray.length === 0) {
    return (
      <div className="wall" style={{ padding: "30px", backgroundColor: "#f5f7fb" }}>
        <p style={{ textAlign: "center" }}>No feedback yet.</p>
      </div>
    );
  }

  return (
    <div
      className="wall"
      style={{
        backgroundColor: "white",
        padding: "30px",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
        💬 Feedback Details
      </h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "25px",
          justifyContent: "center",
        }}
      >
        {feedbackArray.map((item, index) => {
          // Safe fallbacks for possible missing fields
          const displayName = item.name || "Anonymous";
          const displayEmail = item.email || "anonymous@example.com";
          const userName = item.user?.name || "Anonymous User";
          const rating = item.rating || 0;
          const message = item.message || "No message provided.";

          return (
            <div
              key={index}
              style={{
                width: "300px",
                padding: "20px",
                borderRadius: "15px",
                backgroundColor: "#fff",
                boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
                transition: "0.3s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              {/* Avatar & Name/Email */}
              <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
                {/* Initial circle */}
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    backgroundColor: "#4CAF50",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "bold",
                    marginRight: "10px",
                  }}
                >
                  {displayName.charAt(0).toUpperCase()}
                </div>

                {/* Name and small label */}
                <div>
                  <strong>{displayEmail}</strong>
                  <p style={{ fontSize: "12px", color: "gray", margin: 0 }}>
                    {userName}
                  </p>
                </div>
              </div>

              {/* Star Rating */}
              <div style={{ margin: "10px 0" }}>
                {rating > 0 ? getStars(rating) : "No Rating"}
              </div>

              {/* Feedback Message */}
              <p style={{ fontStyle: "italic", color: "#444" }}>
                “{message}”
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FetchFeedBackDetail;
