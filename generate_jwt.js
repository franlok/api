const jwt = require('jsonwebtoken');
const fs = require('fs');

// Load the service account key file directly
const serviceAccount = {
  "type": "service_account",
  "project_id": "lucky-adviser-404007",
  "private_key_id": "5c7f29fd8562a7dfe585357ec16ad631e2f59583",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCH4w2Zc17OKu1Y\nE1KY8CM8LMvBUzG4TljDpRjwV8i7+yL8nx3gGja7FbYiTlkEOqIpOZyqQrs9Rare\n+p+Vr8YxTkUrgY3ccf1/GlpkDkJj5ny5zAMmvpYuJmcdv6SUZYl0s+xJnV2LNiv8\nAZGzXae4mwQGv5qyM4YB061+Z9g1tE2HaWqC0Y+0x32WiaEvJMwTB0H+BT88lYvd\nDyFex5jsRv9Mmgsix62g55TEPoNB5EogclWZpHI9odugDhF8NZho82fFuDFFLsY7\naBHFRdvSI0JnjqrUQRfTLb/nlp4o7OfZtKykXZtgvr2oGsg0XG/se8rVJfgzWpfI\nGTDVYTS3AgMBAAECggEAO4H3Rqf7cJXj8pojpc4j4ApOAI+KSogk3yjBzx7iTVAh\ndjfIQYe5SByt8kAVQ4DZ2uvb68Plc2O6/IMMt+SOCrGYIQFPOqbAuJS12PNVp6Ic\nJNFu39y+r98pcSGn1UTR+UWByIsdmAVVJbsaL05oULOyA7KM8FUX7lzgsWaQjJOR\ntF3NQzdNEvBdN0vseZfx3KpkgObGB5EpNSmIA+KLnioFZEjAMFjsbcf4gG5GY4EP\nl88zMoAWchc+OBXm6c8TR6S9Eddxavf7q7rKAlPpuoJ/5QjkAz5G2piBKac49kjG\n/emaaK9qg1/QpzrUa0fyPNw8wo7j0/vPHffzEbP7wQKBgQC67USYXEu+dqpVANvT\nbA56KSqYrqEUvk3kytL9liyG3cyWGspGKBR7U2NjZ4lxRMBXjpHWZqmFm+L/EvRO\ncjeNEmNXXxtXNt0Y0n/uV9rKk2lgSW5TYB+qafXfyPQH6O20v0VIJlPQZvKf8fS9\nb9VvlFdEXRISMgv/oyDoLs2SeQKBgQC6GY889zTt8dGESKwqH2Lbc8vhsJ/LvlTr\nIHt11W1w4tz/RwWR4GTxzlDLR5iSqzCM6U1mPnmvWcz84fsfReFiTOS5mvxNB33l\ndvptKrdZeWqwa511x6vhbso8FP+LUZJCR1mpMMamvHqyAPkWzvppKc8F2vv40XbQ\nJTE4C4W0rwKBgQCptq5m3rVucfLoRmVPqXXjd+jSwwpA+R9jsLqrvmMi99G+Hwiz\ndcRSzD0ajXB+RHuVgz3puUAErKoGCMGDT7QcAyvqsdDy+D75QHUiguWEsx4ja8gd\nLtLROG8iBSN64wKe7mIKxbGnLzDuAxG/xP+11Kr+yLmVh5bZPNStuYCvkQKBgD9i\nDzATfjqAfvyQB9s8312g/dK7ZmFtTNzcLlB+xYyKJ/zmApahl5/nxgrGMsfZeGq1\n1z+4jZdUfYWvrekD0vS4/bndeIr/vzhVIovl3ZaizNyTeoiv3fGk20pFWJfpy2e5\nh2chjrchQKS5whyrmAwTSkhTQjiHlvDjifTtr7dPAoGBAJ0d/1OjpohUE1nP9UdK\nqmO57QUkYfleQaP2/pfw4kQAPeW6TWsEx6QQpGpS4KiYuJGQOFHIzM33lFKceaIt\nNER1Eke/MKy2vlrcFf0Av1CjrbSzPvupm/93F68H7x31UdC8hCPrm9hBT8ujOQ7m\nkjSW20Mjd379/k/fSRWxZBnY\n-----END PRIVATE KEY-----\n",
  "client_email": "franlok@lucky-adviser-404007.iam.gserviceaccount.com",
  "client_id": "112914691549807093680",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/franlok%40lucky-adviser-404007.iam.gserviceaccount.com",
  "universe_domain": "googleapis.com"
};
function generateJWT(user, role) {

// Define JWT payload
const payload = {
  iss: serviceAccount.client_email, // Issuer claim
  scope: 'https://www.googleapis.com/auth/cloud-platform', // Scope claim
  aud: 'https://oauth2.googleapis.com/token', // Audience claim
  exp: Math.floor(Date.now() / 1000) + 3600, // Expiration time
  iat: Math.floor(Date.now() / 1000), // Issued at time
  user, // Add user to the payload
  role, 

};

// Specify the JWT signing algorithm
const signOptions = {
  algorithm: 'RS256',
  header: {
    alg: 'RS256',
    typ: 'JWT'
  }
};

// Generate the JWT
return jwt.sign(payload, serviceAccount.private_key, { algorithm: 'RS256' });
}
module.exports = { generateJWT };

//console.log(token);
//console.log(Math.floor(Date.now() / 1000));