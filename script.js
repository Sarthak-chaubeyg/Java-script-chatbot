var isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

    if (isLoggedIn) {
        document.getElementById("loginContainer").style.display = "none";
        document.getElementById("chatContainer").style.display = "block";
    }

    document.getElementById("loginForm").addEventListener("submit", function(event) {
        event.preventDefault();
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        if (username === "SC" && password === "ChaubeyG") {
            document.getElementById("loginContainer").style.display = "none";
            document.getElementById("animationContainer").style.display = "block";
            setTimeout(function() {
                document.getElementById("animationContainer").style.display = "none";
                alert("Login successful!");
                localStorage.setItem("isLoggedIn", "true");
                document.getElementById("chatContainer").style.display = "block";
                isLoggedIn = true;
            }, 6000); // Adjust the duration as needed
        } else {
            alert("Invalid username or password. Please try again.");
        }
    });

    document.getElementById("clearChatButton").addEventListener("click", function() {
        clearChat();
    });

    document.getElementById("logoutButton").addEventListener("click", function() {
        logout();
    });

    document.getElementById("userInput").addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            var userInput = document.getElementById("userInput").value;
            document.getElementById("userInput").value = "";
            var chatMessages = document.getElementById("chatMessages");
            var userMessage = document.createElement("p");
            userMessage.textContent = "You: " + userInput;
            chatMessages.appendChild(userMessage);

            if (isLoggedIn) {
                var aiResponse = document.createElement("p");
                aiResponse.innerHTML = "SarAi: " + getAiResponse(userInput);
                aiResponse.style.backgroundColor = "#f0f0f0"; // Background color for AI response
                aiResponse.style.padding = "8px"; // Padding for better readability
                chatMessages.appendChild(aiResponse);
                chatMessages.scrollTop = chatMessages.scrollHeight;
            }
        }
    });

    function getAiResponse(userInput) {
        switch (userInput.toLowerCase().trim()) {
            case "hi":
            case "yo":
		case "Hello":
		case "hlo":
		case "Hlo":
            case "hello":
                return "Hello! What's up bro👊";
            case "how are you?":
                return "I'm just a computer program, but I'm functioning properly!";
            case "who made you?":
            case "who made you?":
		case "Who made you":
		case "who made you":
                return 'I was developed by <b>Sarthak Chaubey</b>. co-engineered with ChatGPT <i class="ri-openai-fill"></i> and edited by him';
            case "what's your name?":
                case "what's your name?":
		case "What's your name?":
                case "What's your name?":
			case "What's your name":
                case "what's your name":
			case "What is your name?":
                case "what is your name?":
		case "What is your name":
                case "what is your name":
		case "Whats your name?":
		case "whats your name?":
		case "Whats your name":
		case "whats your name":
		case "Your name?":
		case "your name?":
		case "Your name":
		case "your name":
                return "My name is SarAi, a <b>java-script based Chatbot</b> & yeah thanks for asking. 😀 ";
		case "":
			return "Please type something you need =/";
            // Add more cases as needed
            case "parevartan school logo":
                return '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThjXb9Q5EuPnS17cdxXZOVoen2xaAeWRvf5gqzwhD6PtCeiUebxJHNz46P&s=10" height="350px" width="400px">';
            case "How to be Brahmachari?":
				case "How to be Brahmachari?":
				case "how to be brahmachari?":
				case "how to be brahmachari?":
				case "how to be brahmachari":
				case "how to be brahmachari":
                return "Here are all the things you need to follow to be a brahmachari❤️️️<br><b>1. Save your vital energy.<br>2. No sexual thinking 😇<br>3. Don't watch romantic video🤮<br>4. No dirty conversation🤨<br>5. Don't abuse 🤬🤬<br>6. No fast food🍔🍔❌<br>7. Go outside in nature🌿🌿️🌱<br>8. Do meditation🧘, Exercise⛹️⛹️<br>9. Focus on goal 🔥🔥<br>10. Every girl just like sister👭</b>";
            case "Convert the file into mp3": case "convert the file into mp3": case "Download music for free": case "download music for free": case "Download video for free": case "download video for free": case "Download song for free": case "download song for free": case "Conert the file into mp4": case "convert the file into mp4": case "Covert into music": case "convert into music": case "Download video for free": case "download video for free": return 'Sure, here is the tool to convert any <b>youtube file into mo3 or mp4</b><br><br><iframe src="https://w16.mp3-juices.nu/" height="300px" width="350px"></iframe>';

            case "I want to search something":
            case "i want to search something":
            case "I want to search something on Google":
            case "i want to search something on Google":
            case "I want to search something on google":
            case "i want to search something on google":
            case "Open search panel":
            case "open search panel":
            case "Open Google":
            case "open Google":
            case "Open google":
            case "open google":
                  return 'Let me open the sesrch panel for you<br><iframe src="https://ncert.nic.in/ncerts/l/iess201.pdf" height="350px" width="350px"></iframe>';
		case "Download this webpage":
		case "download this webpage":
		case "Download this website":
		case "download this website":
			return 'Here is the download link for this website <a href="https://github.com/Sarthak-chaubeyg/Java-script-chatbot/archive/refs/heads/main.zip" style="color:rgba(22,127,77,0.5);">Download now</a>';
	    case "Download new background images":
		case "download new background images":
		case "download background images":
		case "Download background images":
		return 'Here are the images you have asked for. These all images are created by imagination, the style is <b>GRAPHIC ART</b><br><a href="https://www.mediafire.com/file/t6nf729q8chlubi/graphics.zip/file">DOWNLOAD NOW</a>'
		case "Hlo":
			case "hey There":
			case "Hey!":
			case "hey!":
			case "Hey there":
		case "Hey":
		case "hey":
		case "what's up?":
		case "what's up":	
				return 'Hey 😙 , thanks for reaching me';
		case "I am feeling bored":
		case "i am feeling bored":
		case "feeling bored":
		case "bro i am feeling bored":
		case "Bro i am feeling bored":
		case "bro iam feeling bored":
		case "Bro iam feeling bored":
			return 'Are you feeling lonely? if yes, then you should play this game, <iframe src="tic-tac-toe.html" height="300px" width="300px"></iframe>';
		
			//Music type cased
            case "rain ambient sound":
            case "play rain ambient sound":
            case "rain background sound":
            case "Play rain background sound":
            case "play rain Background sound":
                return 'Here is the relaxing rain ambient sound. I hope you will find useful.😌<br><audio controls src="test.mp3"></audio>';
            case "play suzume song":
            case "play suzume":
                return 'Here is the song you asked for. Probably you are an anime lover or watch anime or its edits😙<br><audio controls src="ai-res/suzume.mp3"></audio>';
	    case "Play Relaxing song":
           case "play relaxing song":
	    case "play Relaxing sound":
	    case "Play Doraemon background sound":
           case "Play doraemon background song":
           case "play Doraemon background sound":
	    case "play Doraemon bg sound":
					 return 'Here is the song. I hope it will be a relaxing mood song😌<br><audio controls src="ai-res/relaxingbg.mp3"></audio>';
				case "Play tadow song":
				case "play tadow song":
				case "Play tadow":
				case "play tadow":
					 return 'Here is the song. I hope it will be a relaxing mood song😌<br><audio controls src="tadow.mp3"></audio>';
			        case "Play Hotline song":
				case "play hotline song":
				case "Play Hotline":
				case "play hotline":
					 return 'Here is the song. I hope it will be a relaxing mood song😌 and will uplift your mood. You should watch a rainy weather <i class="ri-rainy-fill"></i> to enhance this song betas and vibe😌<br><audio controls src="hotline.mp3"></audio>';
                case "Play Death to me song":
				case "play death to me song":
				case "Play Death to me":
				case "play death to me":
					 return 'Here is the song. I hope it will be motivational song for you<br><audio controls src="ai-res/death-to-me.mp3"></audio>';
			   case "Play Shinunoga E-Wa song":
				case "play Shinunoga E-Wa song":
				case "play shinunoga e wa song":
				case "Play shinunoga e wa song":
				case "Play shinunoga e wa":
				case "play shinunoga e wa":
				    return 'Here is the song. I hope it will boost your mood☺️<br><audio controls src="shinunoga.mp3"></audio>';
				case "play ride it song":
				case "Play ride it song":
				case "play ride it":
				case "Play ride it":
				case "Play Ride it song":
				case "play Ride it song":
				    return 'Here is the song you have asked for.<br><audio controls src="Ride-it.mp3"></audio>';
				case "Play dandelions song":
				case "play dandelions song":
				case "Play Dandelions song":
				case "play Dandelions song":
				case "Play dandelions":
				case "play dandelions":
					 return 'Here is the song. It will uplift your mood😇<br><audio controls src="Dandelions.mp3"></audio>';
			        case "play Sweater weather song":
				case "Play sweater weather song":
				case "play Sweater weather":
				case "play sweater weather":
				case "play sweater Weather":
					 return 'Here is the song. I hope you are feeling really good😇<br><audio controls src="sweater-weather.mp3"></audio>';
				 case "Play Doraemon relaxing song":
				case "play doraemon relaxing  song":
				case "Play Relaxing bg song":
				case "play relaxing bg song":
				case "Play relaxing bg":
				case "play Relaxing bg":
				case "play relaxing song":
							 return 'Here is the song. It will uplift your mood😇<br><audio controls src="relaxingbg.mp3"></audio>';
				case "Play Happy nation song":
				case "play Happy nation song":
				case "play happy nation song":
				case "Play happy nation song":
				case "Play happy nation":
				case "play happy nation":
					 return 'Here is the song you have asked for.A classical song that will make you happy😄 <br><audio controls src="Happy-nation.mp3"></audio>';
				case "Play Tourner dans le vide song":
				case "play top g":
				case "Play top g":
				case "play top G":
				case "Play top G":
				case "play Tourner dans le vide song":
				case "play tourner dans le vide song":
				case "Play tourner dans le vide song":
				case "play tourner dans le vide":
				case "Play tourner dans le vide":
					 return 'Here is that song. Andrew-Tate 🗿Top G<br><audio controls src="Tourner-dans-le-vide.mp3"></audio>';
				case "Play Aku sayang song":
				case "play Aku sayang song":
				case "play aku sayang song":
				case "Play aku sayang song":
				case "play aku sayang":
				case "Play akh sayang":
					 return 'Here is the song that you have asked for.<br><audio controls src="Aku-sayang.mp3"></audio>';
				case "Play Angels in the tibet song":
				case "play Angles in the tibet song":
				case "Play angels in the tibet song":
				case "play angels in the tibet song":
				case "play angels in the tibet":
				case "play angels in the tibet":
					 return 'Here is the song.<br><audio controls src="Angels-in-tibet.mp3"></audio>';
				case "Play Greedy song":
				case "play Greedy song":
				case "Play greedy song":
				case "play greedy song":
				case "play greedy":
				case "play greedy":
					 return 'Here is the song.<br><audio controls src="greedy.mp3"></audio>';
				case "Play Without me song":
				case "play Without me song":
				case "Play without me song":
				case "play without me song":
				case "play without me":
				case "play without me":
					 return 'Here is the song.<br><audio controls src="Without-me.mp3"></audio>';
				case "Play Lovely song":
				case "play Lovely song":
				case "Play lovely song":
				case "play lovely song":
				case "play lovely":
				case "play lovely":
					 return 'Here is the emotional song.<br><audio controls src="Lovely.mp3"></audio>';	 
                case "Play Redrum  song":
				case "play Redrum  song":
				case "Play redrum  song":
				case "play redrum  song":
				case "play redrum":
				case "play redrum":
					 return 'Here is the song. You have not believe that these type of songs are also famous 😮<br><audio controls src="Redrum.mp3"></audio>';
           case "Play Royalty song":
				case "play Royalty song":
				case "Play royalty song":
				case "play royalty song":
				case "play royalty":
				case "play royalty":
					 return 'Here is the song.<br><audio controls src="ai-res/royalty.mp3"></audio>';
           case "Play Sonic exe song":
				case "play Sonoc exe song":
				case "Play sonic exe song":
				case "play sonic exe song":
				case "play sonic exe":
				case "play sonic exe":
					 return 'Here is the song.<br><audio controls src="sonic-exe.mp3"></audio>';
           case "Play Alors song":
				case "play Alors song":
				case "Play alors song":
				case "play alors song":
				case "play alors":
				case "play alors":
					 return 'Here is the song.<br><audio controls src="alors.mp3"></audio>';
				case "Play Wannabe song":
				case "play Wannabe song":
				case "Play wannabe song":
				case "play wannabe song":
				case "play wannabe":
				case "play wannabe":
					 return 'Here is the aesthetic song😍<br><audio controls src="Wannabe.mp3"></audio>';
				case "Play FRI(END)S song":
				case "play FRI(END)S song":
				case "Play fri(end)s song":
				case "play fri(end)s song":
				case "play fri(end)s":
				case "play fri(end)s":
					 return 'Here is the song I think you like BTS V 🤔🥰.<br><audio controls src="FRI(END)S.mp3"></audio>';
				case "Play People you know song":
				case "play People you know song":
				case "Play people you know song":
				case "play people you know song":
				case "play people you know":
				case "play people you know":
					 return 'Here is the song.<br><audio controls src="People-you-know.mp3"></audio>';
				case "Play Montagem invasao song":
				case "play Montagem invasao song":
				case "Play montagem invasao song":
				case "play montagem invasao song":
				case "play montagem invasao":
				case "play montagem invasao":
					 return 'Here is the Badass phonk😎.<br><audio controls src="Montagem-invasao.mp3"></audio>';
				case "Play Way down we go song":
				case "play Way down we go song":
				case "Play way down we go song":
				case "play way down we go song":
				case "play way down we go":
				case "play way down we go":
					 return 'Here is the song.Feel motivated🙂‍↔️<br><audio controls src="Way-down-we-go.mp3"></audio>';
           case "Play Wish song":
				case "play Wish song":
				case "Play wish song":
				case "play wish song":
				case "play wish":
				case "play wish":
					 return 'Here is the song you asked for. The last part is similar to Doraemon background sound. The real Nostalgia 😇<br><audio controls src="Wish.mp3"></audio>';
           case "Play Senorita song":
           case "play Senorita song":
           case "Play senorita song":
           case "play senorita song":
           case "play senorita":
           case "Play senorita":
               return 'Here is the song you have asked for.<b><audio controls src="Senorita.mp3"></audio>';
            case "Play Vardaan song":
				case "play Vardaan song":
				case "Play vardaan song":
				case "play vardaan song":
				case "play vardaan":
				case "play vardaan":
					 return 'Here is the song.<br><audio controls src="Vardaan.mp3"></audio>';
				case "David putra bike":
				case "david putra bike":
				case "David putra bike edit":
				case "david putra bike edit":
					  return '<p>David putra is bike of Jack in Oggy and the cockroaches show and having <b>2000CC engine</b> with more that <b>3000km/h+ top speed</b><video controls height="350px" width="300px" src="David-putra.mp4"></video>';
            case "What is money?":
            case "what is money?":
            case "What is money":
            case "what is money":
            case "What is importance of money":
            case "what is importance of money":
            case "Importance of money":
            case "importance of money":
            case "Money Importance":
            case "money importance":
                 return 'Se this and you will know the real power of  money💰<br><video controls height=350px width=300px src="ai-res/moneyimportance.mp4"></video>';
            case "clear":
                clearChat();
                return "Chat cleared.";
            default:
                return "I'm sorry but due to under development, the Ai will respond specific answers only.";
        }
    }

    function clearChat() {
        var chatMessages = document.getElementById("chatMessages");
        chatMessages.innerHTML = ""; // Clear all content inside chatMessages
    }

    function logout() {
        localStorage.removeItem("isLoggedIn");
        document.getElementById("loginContainer").style.display = "block";
        document.getElementById("chatContainer").style.display = "none";
        isLoggedIn = false;
	}
