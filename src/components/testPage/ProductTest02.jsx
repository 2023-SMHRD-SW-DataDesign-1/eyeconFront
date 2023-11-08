import React, { useEffect, useRef, useState } from 'react';
import { fabric } from 'fabric';
import axios from 'axios';
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';

const ProductTest02 = ({ beforeimg, hitmap}) => {

    const [imageUrls, setImageUrls] = useState([]);
    const canvas = new fabric.Canvas('canvas');
    useEffect(() => {
        axios.post('http://3.36.133.196:5000/slice',{ 
            // beforeImgUrl은 result페이지에서 받아와야 됨
           beforeImgUrl : beforeimg})
        .then(response => { 
            const imageStrings = response.data;
            const urls = imageStrings.map(imageString => `data:image/jpeg;base64,${imageString}`);
            setImageUrls(urls);
            // 원본 이미지에서 상품의 위치를 검정색으로 칠한 매대 이미지/ 일단은 주석
            // const non_product_image = response.data.non_product_image;
            // setNonProduct(`data:image/jpeg;base64,${non_product_image}`);
        });
    }, []);    

    const canvasRef = useRef(null);

    React.useEffect(() => {
      canvasRef.current = document.getElementById('canvas');
    }, []);
  
    // const handleCapture = async () => {
    //   // 캔버스 요소 선택
    //   var canvas = document.getElementById('canvas');
    
    //   // 2D 렌더링 컨텍스트 가져오기
    //   var ctx = canvas.getContext('2d');
    
    //   // 이미지 로드
    //   var img = new Image();
    //   img.crossOrigin = "anonymous";  // crossOrigin 속성 설정
    //   img.src = "image_url";  // 이미지 URL
    //   await new Promise((resolve) => {
    //     img.onload = function() {
    //       // 이미지를 캔버스에 그리기
    //       ctx.drawImage(img, 0, 0);
    //       resolve();
    //     };
    //   });
    
    //   // 캔버스의 전체 영역에 대한 픽셀 데이터 가져오기
    //   var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    
    //   // 캔버스 데이터를 데이터 URL로 변환
    //   var dataURL = canvas.toDataURL('image/png');
    
    //   // 데이터 URL을 Blob 객체로 변환
    //   fetch(dataURL)
    //     .then(res => res.blob())
    //     .then(blob => {
    //       // Blob 객체를 이미지 파일로 저장
    //       saveAs(blob, 'canvas.png');
    //     });
    // };
    

    // 상품 이미지 생성될 공간
    const eventory = () =>{
        fabric.Image.fromURL('https://firebasestorage.googleapis.com/v0/b/eyecon-9b097.appspot.com/o/planogram%2F%EA%B2%A9%EC%9E%90.png?alt=media&token=9fff1474-9297-495c-88e0-dfb9182f71bb', function(img) {
            img.set({
              left: 100,
              top: 0,
              angle: 0,
              padding: 10,
              cornersize: 10,
              hasRotatingPoint:true,
              selectable: false,
              hasControls: false, // 이미지의 회전과 크기 조정을 제한함
              hasBorders: false // 이미지의 테두리를 제거함
            });
      
            img.scaleToWidth(400);
            img.scaleToHeight(canvas.height);
            // canvas.add(img).setActiveObject(img);
            canvas.add(img);
            canvas.sendToBack(img); // 이미지를 캔버스의 가장 아래 레이어로 보냄
          });
    }
    const showHitmap = () =>{
        fabric.Image.fromURL(`${hitmap}`, function(img) {
            img.set({
              left: 1300,
              top: 100,
              angle: 0,
              padding: 10,
              cornersize: 10,
              hasRotatingPoint:true,
              selectable: false,
              hasControls: false, // 이미지의 회전과 크기 조정을 제한함
              hasBorders: false // 이미지의 테두리를 제거함
            });
      
            img.scaleToWidth(400);
            img.scaleToHeight(canvas.height*0.6);
            // canvas.add(img).setActiveObject(img);
            canvas.add(img);
            canvas.sendToBack(img); // 이미지를 캔버스의 가장 아래 레이어로 보냄
          });
    }
    const showCase = ()=>{
        fabric.Image.fromURL('https://firebasestorage.googleapis.com/v0/b/eyecon-9b097.appspot.com/o/planogram%2FKakaoTalk_20231104_144127727.png?alt=media&token=af772986-fde3-4dee-b409-af24700a0dcf', function(img) {
            img.set({
              left: 600,
              top: 0,
              angle: 0,
              padding: 10,
              cornersize: 10,
              hasRotatingPoint:true,
              selectable: false,
              hasControls: false, // 이미지의 회전과 크기 조정을 제한함
              hasBorders: false // 이미지의 테두리를 제거함
            });
      
            img.scaleToWidth(400);
            img.scaleToHeight(canvas.height);
            // canvas.add(img).setActiveObject(img);
            canvas.add(img);
            canvas.sendToBack(img); // 이미지를 캔버스의 가장 아래 레이어로 보냄
          });
    }
    

    const createProduct = () => {
        let row = 0;
        let col = 0;
      
        imageUrls.forEach((url, index) => {
          fabric.Image.fromURL(url, function(img) {
            // 필요한 경우 옵션을 설정
            img.set({
              left: 120 + col * 60, // 이미지의 가로 위치를 조정
              top: 40+row * 99, // 이미지의 세로 위치를 조정
              angle: 0,
              padding: 10,
              cornersize: 10,
              hasRotatingPoint:true,
              selectable: true,
              hasControls: false, // 이미지의 회전과 크기 조정을 제한함
              hasBorders: false // 이미지의 테두리를 제거함
            });
      
            // 이미지 크기 조정
            img.scaleToWidth(100);
            img.scaleToHeight(100);
      
            // 캔버스에 이미지 추가
            canvas.add(img);
      
            // 다음 이미지의 위치를 계산
            col += 1;
            if (col >= 7) {
              col = 0;
              row += 1;
              if(row>=8){
                col=0;
                row=0;
              }
            }
          });
        });
      };

    useEffect(() => {
        if (canvasRef.current && imageUrls.length > 0) {
            const canvas = new fabric.Canvas(canvasRef.current, {
              width: 1920,
              height: 880,
            });
            eventory();
            showCase();
            createProduct();
            showHitmap();
        }
    }, [canvasRef,imageUrls]);  // 의존성 배열에 imageUrls를 추가합니다

    useEffect( () => {        
        canvas.renderAll();
    },[]);


    return (
        <div>
            {/* <button className="rounded-3xl border-[2px] border-[#19ab93] p-2 text-sm font-bold" onClick={handleCapture} > capture </button> */}
            <div>
                <canvas id='canvas' width='1920'  height='880'></canvas>
            </div>
        </div>
    )
}

export default ProductTest02
