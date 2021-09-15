function sliding(){
    let imgList = [
        "https://64.media.tumblr.com/55550b748952bd5a7db52edfab12e52e/tumblr_mfiqmjJrZF1rkgns5o1_640.jpg",
        "https://64.media.tumblr.com/tumblr_luckm3LxQa1qbcporo1_500.jpg",
        "https://64.media.tumblr.com/89d9947f5eb39ff25b46248f7a794f32/tumblr_mhlrhrK0Zn1qki31io1_640.jpg",
        "https://64.media.tumblr.com/54bcea0bf3840f75a7600416962cbccc/tumblr_mm2m4zdLDU1rms8aio1_640.jpg",
        "https://64.media.tumblr.com/tumblr_lyx2zwy3bj1r9yklpo1_500.jpg",
        "https://64.media.tumblr.com/tumblr_m52vo36ebe1rnqouso1_540.jpg",
        "https://64.media.tumblr.com/tumblr_m6thz4vRit1qa59a8o1_1280.jpg",
        "https://64.media.tumblr.com/tumblr_lrz5s5EFaS1qa9spqo1_500.jpg",
        "https://64.media.tumblr.com/b14827fafe20af4bc761ce7dcd48ac98/tumblr_mg0nkjtKqF1s1iazfo1_500.jpg",
        "https://64.media.tumblr.com/tumblr_m1dsrlGABs1qflcumo1_640.jpg",
        "https://64.media.tumblr.com/tumblr_lxg5mqg4RD1qe8un5o1_500.jpg",
        "https://64.media.tumblr.com/3ee0ce10f5b4d3877a7445511867172c/tumblr_nl82ji4co81rj2bmio1_500.jpg",
        "https://64.media.tumblr.com/tumblr_lw68r3jIbv1qcglluo1_640.jpg",
        "https://64.media.tumblr.com/ca7b3b26f83ffbfeb8b408e1e5afc099/tumblr_mmtpj1xH2K1qzc711o1_1280.jpg",
        "https://64.media.tumblr.com/tumblr_m38vdxkiBA1qg39ewo1_500.gif",
        "https://64.media.tumblr.com/fe4461bfc33646bd719780819462601b/tumblr_mllcu4RmSu1rkywiso1_400.gif",
        "https://64.media.tumblr.com/350f1db9e6f1967c8c60469ac730e71c/tumblr_na8hosE1C51shpedgo1_500.gif",
        "https://64.media.tumblr.com/fd8b5d284a2483d731df89e054dce2bf/tumblr_mjnqckbYCV1s56sdvo1_500.gif",
        "https://64.media.tumblr.com/1ea0a4f1a8833cabfa6aef9272410997/tumblr_mgcf4khhy81rk1qp5o1_500.gif",
        "https://64.media.tumblr.com/tumblr_lteal5Cnaw1qjvvqlo1_500.gif",
        "https://64.media.tumblr.com/tumblr_luz85diybj1qfm2v7o1_500.gif",
        "https://64.media.tumblr.com/tumblr_lqr1m4tiK01qg39ewo1_500.gif",
        "https://64.media.tumblr.com/475ee6259f8534bb6570c30a7d1f22e4/tumblr_mevzfgx6SC1qzgjfco1_500.gif",
        "https://64.media.tumblr.com/c076ec8745c544a8f4710e2a3cb4ac83/tumblr_n1mo8vqC3s1t11472o1_500.gif",
        "https://64.media.tumblr.com/tumblr_lssyc29MG01qejn9ko1_500.gif",
        "https://64.media.tumblr.com/tumblr_ltyg0pGXaZ1qe6mn3o1_500.gif",
        "https://64.media.tumblr.com/3f0d3eff990bcf54993d6d3fcf504237/tumblr_mmnguwahGv1sqatlgo1_640.gif",
        "https://64.media.tumblr.com/5ba1ea8ade5969921e6eecadc8515a97/tumblr_nh4xeq1dpK1u5tvj5o1_r2_400.gif",
        "https://64.media.tumblr.com/719fc882dd9afb6af5f8a035d5cbeabd/tumblr_ngofehJlK01t4kgqto1_500.gif",
        "https://64.media.tumblr.com/cb77bb39a9168edc5e51f389ed50c97c/tumblr_ol2cl4eWEr1upwnswo1_540.gif",
        "https://64.media.tumblr.com/3fe1422aa07ab145c3aa05d14e88e938/tumblr_n5s2uqP8ma1rilp8po1_400.gif",
        "https://64.media.tumblr.com/a9e75e08b31290bed32517038ace349f/tumblr_o0m4avJv1X1smqdb1o1_400.gif",
        "https://64.media.tumblr.com/08852acde781d4681a5a865755834a4e/tumblr_mthw4ag6AX1sg0ygjo1_500.gif"
    ];
    let index = Math.floor(Math.random() * imgList.length);
    var image = document.getElementById('affiche');
    image.src = imgList[index];
    setTimeout(sliding, 4000);
}