/**
 * @file rgbHistogram.cpp
 * @compile g++ -o rgbHistogram rgbHistogram.cpp -I/usr/include/opencv2 -I/usr/inlcude/opencv -L/usr/lib -lopencv_core -lopencv_highgui -lopencv_imgproc
 */
#include <iostream>
using namespace std;

#include <opencv2/core/core.hpp>
#include <opencv2/highgui/highgui.hpp>
#include <opencv2/imgproc/imgproc.hpp>

#define MAX(a,b) (((a)>(b)) ? (a) : (b))

string _path;

int main(int argc, const char* argv[]) {
	// parse arguments
	const char* keys = {
		"{1|||path of image file}"
	};
	cv::CommandLineParser parser(argc, argv, keys);
	if (argc == 1) {
		parser.printParams();
		return -1;
	}
	_path = parser.get<string>("1");

	// load image file
	cv::Mat src = cv::imread(_path, 1);
	if (!src.data) throw "cannot find image file"

	// RGB繝励Ξ繝ｼ繝ｳ縺ｫ蛻����ｧ｣
	vector<cv::Mat> rgbPlanes;
	cv::split(src, rgbPlanes);

	// Calculate histograms
	cv::Mat rHist, gHist, bHist; // RGB縺ｮ繝偵せ繝医げ繝ｩ繝�驟榊����
	int dims = 1; // 繝偵せ繝医げ繝ｩ繝�縺ｮ谺｡蜈����焚
	const int histSize[] = {255}; // 蜷����ｬ｡蜈��������繝偵せ繝医げ繝ｩ繝�驟榊����縺ｮ繧ｵ繧､繧ｺ
	const float ranges[] = {0,256};
	const float* histRanges[] = {ranges}; // 蜷����ｬ｡蜈��������繝偵せ繝医げ繝ｩ繝�縺ｮ繝薙Φ縺ｮ蠅����阜

	cv::calcHist(&rgbPlanes[0], 1, 0, cv::Mat(), rHist, 1, histSize, histRanges);
	cv::calcHist(&rgbPlanes[1], 1, 0, cv::Mat(), gHist, 1, histSize, histRanges);	
	cv::calcHist(&rgbPlanes[2], 1, 0, cv::Mat(), bHist, 1, histSize, histRanges);

	// Calculate max value of histograms
	double maxValue, rMax, gMax, bMax;
	cv::minMaxLoc(rHist, 0, &rMax);
	cv::minMaxLoc(gHist, 0, &gMax);
	cv::minMaxLoc(bHist, 0, &bMax);
	maxValue = MAX(rMax, MAX(gMax, bMax));

	// Scaling histograms
	rHist *= histSize[0] / maxValue;
	gHist *= histSize[0] / maxValue;
	bHist *= histSize[0] / maxValue;

	// Draw histograms
	cv::Mat rHistImage(histSize[0], histSize[0], CV_8UC3, cv::Scalar::all(255));
	cv::Mat gHistImage(histSize[0], histSize[0], CV_8UC3, cv::Scalar::all(255));
	cv::Mat bHistImage(histSize[0], histSize[0], CV_8UC3, cv::Scalar::all(255));
	for (int i = 0; i < histSize[0]; ++i) {
		cv::rectangle(rHistImage,
					  cv::Point(i, (histSize[0]-rHist.at<float>(i))),
					  cv::Point(i+1, histSize[0]),
					  cv::Scalar(0,0,255), -1);
		cv::rectangle(gHistImage,
					  cv::Point(i, (histSize[0]-gHist.at<float>(i))),
					  cv::Point(i+1, histSize[0]),
					  cv::Scalar(0,255,0), -1);
		cv::rectangle(bHistImage,
					  cv::Point(i, (histSize[0]-bHist.at<float>(i))),
					  cv::Point(i+1, histSize[0]),
					  cv::Scalar(255,0,0), -1);
	}

	cv::namedWindow("R-Histogram", 0);
	cv::imshow("R-Histogram", rHistImage);
	cv::namedWindow("G-Histogram", 0);
	cv::imshow("G-Histogram", gHistImage);
	cv::namedWindow("B-Histogram", 0);
	cv::imshow("B-Histogram", bHistImage);
	cv::waitKey(0);

	return 0;
}
