const FansCounter = ({ petitionCount }) => {
  const shareUrl = 'https://bring-back-neymar.vercel.app';
  const shareText = `I just signed the petition to bring Neymar back! Join ${Number(petitionCount || 0).toLocaleString()} fans. Sign now:`;

  const shareOnTwitter = () => {
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
    window.open(url, '_blank');
  };

  const shareOnFacebook = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
    window.open(url, '_blank');
  };

  const shareOnWhatsApp = () => {
    const url = `https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`;
    window.open(url, '_blank');
  };

  const shareOnTelegram = () => {
    const url = `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`;
    window.open(url, '_blank');
  };

  const copyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    alert('Link copied to clipboard!');
  };

  return (
    // ✅ h-full added to match PetitionForm
    <section className="w-full max-w-xl h-full">
      {/* ✅ h-full + flex flex-col added */}
      <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-blue-950 via-blue-800 to-blue-700 shadow-2xl h-full flex flex-col">
        {/* Background Glow */}
        <div className="absolute top-0 left-0 h-56 w-56 rounded-full bg-yellow-300 opacity-10 blur-3xl"></div>
        <div className="absolute right-0 bottom-0 h-56 w-56 rounded-full bg-green-300 opacity-10 blur-3xl"></div>

        {/* Brazil Inspired Top Border */}
        <div className="h-2 bg-linear-to-r from-green-400 via-yellow-300 to-green-400"></div>

        {/* ✅ flex-1 so this fills available space */}
        <div className="relative z-10 flex-1 p-8 sm:p-10">
          {/* Badge */}
          <div className="mb-6 flex justify-center">
            <span className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-bold tracking-widest text-yellow-200 uppercase backdrop-blur">
              Brasil Fans
            </span>
          </div>

          {/* Counter */}
          <div className="text-center">
            <h1 className="text-5xl font-black tracking-tight text-white drop-shadow-lg transition duration-300 hover:scale-105 sm:text-6xl lg:text-7xl">
              {Number(petitionCount || 0).toLocaleString()}
            </h1>

            {/* Decorative Divider */}
            <div className="mx-auto my-5 h-1 w-24 rounded-full bg-linear-to-r from-green-300 via-yellow-300 to-green-300"></div>

            {/* Subtitle */}
            <p className="text-sm font-semibold tracking-[0.3em] text-blue-100 uppercase sm:text-base">
              Fans Signed Petition
            </p>

            {/* Description */}
            <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-blue-100 sm:text-base">
              Supporters from across the globe are standing together to back Neymar Jr and celebrate
              his unforgettable legacy with Brasil.
            </p>
          </div>
        </div>

        {/* Share Section — stays at bottom naturally */}
        <div className="relative z-10 border-t border-white/10 px-8 py-6 sm:px-10">
          <p className="mb-4 text-center text-xs font-semibold uppercase tracking-widest text-blue-200">
            Share the Petition
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {/* X / Twitter */}
            <button
              onClick={shareOnTwitter}
              className="flex items-center gap-2 rounded-full bg-black px-4 py-2 text-xs font-bold text-white transition hover:opacity-80"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              X / Twitter
            </button>

            {/* Facebook */}
            <button
              onClick={shareOnFacebook}
              className="flex items-center gap-2 rounded-full bg-[#1877F2] px-4 py-2 text-xs font-bold text-white transition hover:opacity-80"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Facebook
            </button>

            {/* WhatsApp */}
            <button
              onClick={shareOnWhatsApp}
              className="flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-xs font-bold text-white transition hover:opacity-80"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </button>

            {/* Telegram */}
            <button
              onClick={shareOnTelegram}
              className="flex items-center gap-2 rounded-full bg-[#229ED9] px-4 py-2 text-xs font-bold text-white transition hover:opacity-80"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
              Telegram
            </button>

            {/* Copy Link */}
            <button
              onClick={copyLink}
              className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold text-white transition hover:bg-white/20"
            >
              🔗 Copy Link
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FansCounter;
