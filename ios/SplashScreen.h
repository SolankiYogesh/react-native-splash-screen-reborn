
#ifdef RCT_NEW_ARCH_ENABLED
#import <RNSplashScreenSpec/RNSplashScreenSpec.h>
@interface SplashScreen : NSObject <NativeSplashScreenSpec>
#else
#import <React/RCTBridgeModule.h>

@interface SplashScreen : NSObject <RCTBridgeModule>
#endif
+ (void)showSplash:(NSString*)splashScreen inRootView:(UIView*)rootView;
+ (void)show;
+ (void)hide;


@end
