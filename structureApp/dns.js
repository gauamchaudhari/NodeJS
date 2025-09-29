const dns = require('node:dns');

// DNS lookup example (Resolving a domain to IP)
dns.lookup('www.google.com', (err, address, family) => {
  if (err) {
    console.log('Error:', err);
  } else {
    console.log('Address:', address);
    console.log('Family:', family);
  }
});

// Resolve MX (Mail Exchange) record for a domain
dns.resolveMx('google.com', (err, addresses) => {
  if (err) {
    console.log('Error:', err);
  } else {
    console.log('MX Records:', addresses);
  }
});

// Reverse lookup example (Resolving an IP to domain)
dns.reverse('8.8.8.8', (err, hostnames) => {
  if (err) {
    console.log('Error:', err);
  } else {
    console.log('Hostnames:', hostnames);
  }
});
