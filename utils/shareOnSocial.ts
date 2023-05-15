const shareOnSocial = (url: string, title: string) => {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`;
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&t=${encodedTitle}`;
  const linkedInUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`;
  const whatsAppUrl = `https://api.whatsapp.com/send?text=${encodedTitle} ${encodedUrl}`;

  return {
    twitterUrl,
    facebookUrl,
    linkedInUrl,
    whatsAppUrl,
  };
};

export default shareOnSocial;
