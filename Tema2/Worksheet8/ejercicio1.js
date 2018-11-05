
    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || null;

    var video_audio_properties = {video: true};

    video_properties = {video: {mandatory: {minWidth: 300, minHeight: 300, minFrameRate: 30}, optional: [{ minFrameRate: 60 }]}};

    function onSuccess(stream)
    {
      document.getElementById("video").src = window.URL.createObjectURL(stream);

      document.getElementById("video").play();
    }

    function onError(error)
    {
      console.log("Video capture error: ", error.code);
    }

    if(navigator.getUserMedia != null)
    {
      navigator.getUserMedia(video_properties, onSuccess, onError);
    }
    else
    {
      alert("webcam API not supported");
    }