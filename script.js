function cekJawaban() {
  const jawabanBenar = "cause"; // Jawaban yang benar
  const jawabanInput = document.getElementById("jawaban").value.toLowerCase();
  const runText = document.getElementById("runText");
  const audio = document.getElementById("myAudio");
  const tebakGambar = document.getElementById("tebakGambar");

  if (jawabanInput === jawabanBenar) {
    // Tampilkan SweetAlert ketika jawaban benar
    Swal.fire({
      icon: "success",
      title: "Benar!",
      text: "Jawaban kamu benar!",
      confirmButtonText: "OK",
      confirmButtonColor: "#FF3855",
    }).then(() => {
      // Gantikan gambar yang ditebak dengan GIF
      tebakGambar.src =
        "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExdXlieHF4bTk4OHVjaGF3ZDE4NDEzc3k5bmNwcHJnN2hnZHBtMjZldiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/kJYmDQxKEDTs0LsSwM/giphy.gif";
      // Mulai memutar musik setelah SweetAlert OK ditekan
      audio.play();

      // Tampilkan teks berjalan setelah tombol "OK" ditekan
      runText.innerHTML = `<span>Cause you’re the one that I like I can't deny Every night you’re on my mind So if I call you tonight? Will you pick up and give me your time? &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Miss you every night Miss you all the time &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;No, I don’t even know Where to start</span>`;
      runText.style.display = "block";

      // Hentikan teks berjalan ketika musik selesai
      audio.onended = function () {
        runText.style.display = "none";
      };
    });
  } else {
    // Tampilkan SweetAlert ketika jawaban salah
    Swal.fire({
      icon: "error",
      title: "Salah!",
      text: "Jawaban kamu salah, coba lagi!",
      confirmButtonText: "Coba Lagi",
      confirmButtonColor: "#FF3855",
    });

    // Hentikan musik dan kembalikan gambar ke gambar awal
    audio.pause();
    audio.currentTime = 0;
    tebakGambar.src = "img/tebak-gambar.jpg";
    runText.style.display = "none";
  }
}
