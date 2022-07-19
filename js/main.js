function getMaxOfArray(arr) {
    return arr.indexOf(Math.max(...arr));
}

let app = new Vue({
    el: '.main',
    data: {
        showMain: true,
        showAchivments: false,
        showQuest: false,
        showSocial: false,
        showResult: false,
        numQuest: 0,
        score: {
            'sanya': 0,
            'danik': 0,
            'den': 0,
            'vadik': 0,
            'ilya': 0,
            'vovan': 0,
        },
        totalGame: localStorage.getItem('ilitaTotalGame') ? JSON.parse(localStorage.getItem('ilitaTotalGame')) : {
            'sanya': 0,
            'danik': 0,
            'den': 0,
            'vadik': 0,
            'ilya': 0,
            'vovan': 0,
        },
        totalGames: localStorage.getItem('ilitaTotalGames') ? localStorage.getItem('ilitaTotalGames') : 0,
        questions: questions,
        results: results,
        resultRace: 'sanya',
    },
    methods: {
        goToMain() {
            this.showMain = true;
            this.showAchivments = false;
            this.showQuest = false;
            this.showSocial = false;
            this.showResult = false;
        },
        goToAchivments() {
            if (this.totalGames > 0) {
                this.showMain = false;
                this.showAchivments = true;
                this.showQuest = false;
                this.showSocial = false;
                this.showResult = false;
            } else {
                this.goToQuest()
            }
        },
        goToQuest() {
            this.score = {
                'sanya': 0,
                'danik': 0,
                'den': 0,
                'vadik': 0,
                'ilya': 0,
                'vovan': 0,
            }
            this.showMain = false;
            this.showAchivments = false;
            this.showQuest = true;
            this.showSocial = false;
            this.showResult = false;
        },
        goToSocial() {
            this.showMain = false;
            this.showAchivments = false;
            this.showQuest = false;
            this.showSocial = true;
            this.showResult = false;
        },
        goToResult(race) {
            this.showMain = false;
            this.showAchivments = false;
            this.showQuest = false;
            this.showSocial = false;
            this.showResult = true;
            this.resultRace = race;
        },
        nextQuestion(answer) {
            if (this.numQuest == 4) {
                this.numQuest = 0;
                this.endGame();
            } else {
                this.numQuest++;
            }
            eval(answer)
        },
        endGame() {
            this.totalGames++;
            localStorage.setItem('ilitaTotalGames', this.totalGames)
            let endResult = getMaxOfArray([this.score.sanya, this.score.danik, this.score.den, this.score.vadik, this.score.ilya, this.score.vovan])
            if (endResult == 0) {
                this.goToResult('sanya')
                this.totalGame.sanya++
            } else if (endResult == 1) {
                this.goToResult('danik')
                this.totalGame.danik++
            } else if (endResult == 2) {
                this.goToResult('den')
                this.totalGame.den++
            } else if (endResult == 3) {
                this.goToResult('vadik')
                this.totalGame.vadik++
            } else if (endResult == 4) {
                this.goToResult('ilya')
                this.totalGame.ilya++
            } else {
                this.goToResult('vovan')
                this.totalGame.vovan++
            }
            localStorage.setItem('ilitaTotalGame', JSON.stringify(this.totalGame))
        }
    },
    computed: {
        totalScore() {
            let score = 0;
            for (let i in this.totalGame) {
                score += (this.totalGame[i] * results[i].points);
            }
            return score;
        },
        openRaces() {
            let count = 0
            for (let i in this.totalGame) {
                if (this.totalGame[i] > 0) count++;
            }
            return count;
        },
        bestRace() {
            let best = 'sanya'
            for (let i in this.totalGame) {
                if (this.totalGame[i] > this.totalGame[best]) best = i;
            }
            return results[best].name
        },
        showResultRace() {
            return {
                'sanya': this.totalGame.sanya > 0 ? true : false,
                'danik': this.totalGame.danik > 0 ? true : false,
                'den': this.totalGame.den > 0 ? true : false,
                'vadik': this.totalGame.vadik > 0 ? true : false,
                'vovan': this.totalGame.vovan > 0 ? true : false,
                'ilya': this.totalGame.ilya > 0 ? true : false,
            }
        }

    }
})
let audio = new Audio('audio/soundtrack.mp3')
let audio_btn = document.querySelector('.btn__sound')
let audio_icon = document.querySelector('.btn__sound i')

audio.muted = true;
audio.volume = 0.2;

audio.addEventListener('loadedmetadata', function () {
    audio.currentTime = 0 + Math.random() * (audio.duration + 1 - 0)
})

audio_btn.addEventListener('click', function () {
    console.log('audio click', audio.muted)
    if (audio.muted) {
        audio.play();
        audio.muted = false;
        audio_icon.classList.add('fa-volume-up')
        audio_icon.classList.remove('fa-volume-off')
    } else {
        audio.muted = true;
        audio_icon.classList.add('fa-volume-off')
        audio_icon.classList.remove('fa-volume-up')
    }
})
