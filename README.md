# Git Bash에서의 Git 사용법 

## [Git](https://git-scm.com/) 설치

## git에 사용자 정보 등록 
(처음 한 번만 작성해주면 됨)

`git config --global user.name "본인 이름"`<br>
`git config --gloabal user.email "본인 메일 주소"`

- 본인 github계정과 동일한 이메일 주소로 넣을 경우, github에서 commit log 확인시 본인 계정 그대로 잘 보임, <br>
만약 github 이메일 계정이 아닌 걸로 만들면 commit log에서 본인 github 프로필 확인 불가

- 계정 repository마다 다른 계정 정보로 등록하고자 할 때는 
--global 옵션을 --local 옵션으로 바꿔서 작성

## 원격 저장소를 내 로컬 저장소(노트북)로 코드 가져오는 방법
`git clone https://github.com/tave7-nodejs/summary_notes.git`

- 본인이 원하는 로컬 위치로 이동 후, 위 문장 실행시, <br>
현재 github에 있는 모든 코드가 로컬로 이동되며 .git 파일이 추가됨

## 로컬(본인 노트북)에서 수정/추가/삭제된 파일을 원격(github repository)으로 저장하는 법
> 스테이징 -> 커밋 -> 푸시

1. 스테이징 <br>
`git add . ` <br>
모든 파일을 스테이징 단계로 add한다<br>

2. 커밋<br>
`git commit -m "커밋과 함께 남길 메시지"`<br>
스테이징 된 파일들을 커밋한다. <br>

3. 푸시<br>
`git push origin main` <br>
커밋된 파일들을 원격 저장소에 푸시하여 로컬과 원격을 같은 상태로 만든다. <br>
(origin main 안써도 상관없음)<br>

## 원격(github repository)에서 업데이트된 상황을 로컬(본인 노트북)도 업데이트 시켜주는 법
`git pull` 

- A가 본인 로컬에서 수정한 코드를 원격에 올려놓은 상태에서
B가 본인 로컬에서 수정한 코드를 원격에 올리려고 할 때, 
A의 수정사항이 반영되어 있지 않아서 코드의 충돌이 생길 수 있다. 
이를 방지하기 위해 B가 원격에 올리기 전에 A가 수정한 원격 코드를 pull해서 A의 코드를 먼저 B의 로컬에 merge 시켜놓고 나서
B 본인의 로컬 코드를 push해야 한다. 

- 다만 이러한 상황에서 A가 특정 코드를 지웠는데, B가 그 코드를 추가/수정한 상태라면 pull 하고 난 후에 B의 코드가 사라지는 경우도 생길 수 있으니,
merge할 때 각자의 코드를 잘 확인해야 한다. (IDE를 통해 코드를 비교) 

## 브랜치 사용
위와 같은 상황은 둘이 같은 브랜치(같은 작업환경)를 공유하고 있을 때 발생하기 때문에,
각자 코드를 수정해도 충돌이 나지 않고, 최종 완성된 코드만 푸시해서 main repository를 관리할 수 있게
개발자마다 각자의 브랜치를 따로 만들어서 사용한다. 

기본적으로 repository를 만들면 main이라는 repository에서 모든 관리가 이루어지므로,
따로 branch를 만들어서 작업하면 된다. 
